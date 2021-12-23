import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ILabelGroups, IUser, IWorkplace } from '@shared/http/models/database.model';
import { DEFAULT_USER_AVATAR } from '@shared/http/utils/images.const';
import { ICard, IDescription } from '@base/card/card.model';
import { MaskPipe } from 'ngx-mask';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCardFormGroup } from './user-card.model';
import { MessagesService } from '@src/app/core/services/messages.service';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';

@Injectable()
export class UserCardService {
  constructor(
    private $dictionary: DictionariesService,
    private _maskPipe: MaskPipe,
    private $api: ReservationsApiService,
    private fb: FormBuilder,
    private $messages: MessagesService,
    private $liveDataApi: LiveDataApiService
  ) {
  }

  private _user: IUser;
  private _user$ = new BehaviorSubject<Partial<IUser>>( null );
  private _users: IUser[];
  private _labelGroups: ILabelGroups[];
  private _activeLabels: any[];
  private _userCardForm: UserCardFormGroup = new FormGroup( {} );
  private _permanentAssignmentWorkplace: IWorkplace;

  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );
  public isLoading$ = this._isLoading$.asObservable();

  public get user(): Partial<IUser> {
    return this._user$.value;
  }

  public get user$(): Observable<Partial<IUser>> {
    return this._user$.asObservable();
  }

  userData( id: number ): Promise<IUser> {
    return forkJoin( {
      user: this.$dictionary.getDictionaryItemByKey<IUser>( 'labels', id ),
      users: this.$dictionary.getDictionary<IUser[]>( 'labels' ),
      workplaces: this.$dictionary.getDictionary<IWorkplace[]>( 'workplaces' ),
      labelGroups: this.$dictionary.getDictionary<ILabelGroups[]>( 'labelGroups' ),
      activeLabels: this.$liveDataApi.get( 'activeLabels' ),
    } )
      .pipe(
        tap( ( {user, users, labelGroups, activeLabels, workplaces} ) => {
          this._permanentAssignmentWorkplace = workplaces.find( ( w ) => w.labelIdPermanentAssignment === user.id );
          this._users = users;
          this._labelGroups = labelGroups;
          this._activeLabels = activeLabels.map( ( _al ) => _al.id );
          this.setUser( {
            ...user,
            mainPhone: user.mainPhone.slice( 1 ),
          } );
        } ),
        map( ( {user} ) => user ),
      )
      .toPromise();
  }

  default(): ICard {
    return {
      title: 'UserCard.User is not found',
      width: '100%',
      image: DEFAULT_USER_AVATAR,
      descriptionList: [],
      tags: [],
      form: new FormGroup( {mainPhone: new FormControl()} ),
    };
  }

  generateDescriptionList(): IDescription[] {
    const result: IDescription[] = [];
    result.push( {
      name: 'Phone',
      value: this._maskPipe.transform( this._user.mainPhone, '+0 (000) 000-00-00' ),
      formControlTpl: 'phoneControl',
    } );
    result.push( {
      name: 'Email',
      value: this._user.mail,
    } );
    // const managerIds = this._labelGroups
    //   .filter( ( _l ) => this._user.labelGroups.includes( _l.id ) )
    //   .reduce( ( acc, lab ) => {
    //     acc.push( ...lab.managers );
    //     return acc;
    //   }, [] );
    // const leaders = this._users.filter( ( user ) => managerIds.includes( user.id ) );
    // result.push( {
    //   name: 'Managers',
    //   value: leaders.map( ( _l ) => _l.name ).join( '; ' ),
    // } );
    // result.push( {
    //   name: 'Additional information',
    //   value: this._user.description,
    // } );
    result.push( {
      name: 'Status',
      value: this._activeLabels.includes( this._user.id ) ? 'В офисе' : 'Дома',
    } );
    if (this._user.post) {
      result.push( {
        name: 'Position',
        value: this._user.post,
      } );
    }
    if (this._user.description) {
      result.push( {
        name: 'Subdivision',
        value: this._user.description,
      } );
    }
    if (this._permanentAssignmentWorkplace) {
      result.push( {
        name: 'Permanent assignment',
        value: this._permanentAssignmentWorkplace.name,
        link: `/office/${this._permanentAssignmentWorkplace.floorMapId}/workplace/${this._permanentAssignmentWorkplace.id}`,
      } );
    }
    return result;
  }

  convertUserToCard(): ICard {
    this._userCardForm = this.fb.group( {
      mainPhone: [ this._user.mainPhone, [ Validators.maxLength( 11 ), Validators.minLength( 11 ) ] ],
    } );

    return {
      title: this._user.name,
      width: '100%',
      image: this._user.avatarImageUrl || DEFAULT_USER_AVATAR,
      descriptionList: this.generateDescriptionList(),
      tags: [],
      form: this._userCardForm,
    };
  }

  updateUserData( id: number, userData: Partial<IUser> ): Observable<any> {
    this._isLoading$.next( true );
    const prevUserValue = {...this._user};
    this.setUser( {...prevUserValue, ...userData} );

    userData.phones = '+' + userData.mainPhone;
    delete userData.mainPhone;

    return this.$dictionary
      .patchDictionaryItem( 'labels', id, userData )
      .pipe(
        tap( ( {success, data} ) => {
          if (!success) {
            this.setUser( {...prevUserValue} );
            this._userCardForm.reset( this._user );
            this.$messages.error( 'Update error' );
          } else {
            this.$dictionary.updateDictionaryItem( 'labels', data );
          }
        } ),
        catchError( ( e ) => {
          console.log( e );
          return of( null );
        } ),
        finalize( () => this._isLoading$.next( false ) ),
      );
  }

  private setUser( value: IUser ): void {
    this._user = value;
    this._user$.next( value );
  }
}
