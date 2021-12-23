import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { IUser, User } from '../models/user.model';
import { IAppointment, ILabelGroups, IWorkplaceReservation } from '@shared/http/models/database.model';
import { DEFAULT_USER_AVATAR } from '@shared/http/utils/images.const';
import { map, switchMap } from 'rxjs/operators';
import { IDictionary, IDictionaryLabelsItem } from '@shared/dictionaries/dictionaries.model';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { ConfigService } from './config.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isOauthLoggedIn: boolean = false;
  private _user$ = new ReplaySubject<User>(1);
  private _user: User;
  private _authorization: string = '';
  private _tokenUUID: string = '';
  private _deviceId: string = '';
  private _isManager: boolean = null;
  private _label: IDictionaryLabelsItem = null;

  constructor(
    private _dictionaries: DictionariesService,
    private $config: ConfigService,
    private $settings: SettingsService,
    private _cookie: CookieService,
  ) {}

  get label(): IDictionaryLabelsItem | null {
    return this._label;
  }

  get isAuth(): boolean {
    return Boolean(this._user);
  }

  get info(): IUser {
    return this._user;
  }

  get info$(): Observable<IUser> {
    return this._user$.asObservable();
  }

  get authorization(): string {
    return this._authorization;
  }

  get tokenUUID(): string {
    return this._tokenUUID;
  }

  get deviceId(): string {
    return this._deviceId;
  }

  get isManager(): boolean {
    return this._isManager;
  }

  get label$(): Observable<IDictionaryLabelsItem> {
    return this._user$.pipe(switchMap(() => this.getLabel$()));
  }

  setUser(id: number, deviceId: string, uuid: string, credentials: string): void {
    this._authorization = `Basic ${credentials}`;
    this._tokenUUID = uuid;
    this._deviceId = deviceId;

    this._dictionaries.already$
      .pipe(switchMap(() => combineLatest([this.labelGroups$, this.getLabel$(id)])))
      .subscribe(([labelGroupsDict, label]) => {
        const { name, avatarImageUrl, labelGroups }: IDictionaryLabelsItem = label;
        this.setManager(labelGroupsDict, id);
        this._user = new User({
          id,
          name,
          deviceId,
          labelGroups,
          tokenUUID: this._tokenUUID,
          avatarUrl: avatarImageUrl || DEFAULT_USER_AVATAR,
          authorization: this._authorization,
        });
        this._user.setLabelGroupsManager(labelGroupsDict);
        this._label = label;
        this.updateUser$();
        const days = +this.$config.get<number>('authTokenCookieTime') / 1000 / 60 / 60 / 24; // calculate count of days
        const cookieTime = days || 0.1;
        this._cookie.set(this._cookieName, JSON.stringify(this._user), cookieTime);
      });
  }

  setUser$(id: number, deviceId: string, uuid: string, credentials: string) {
    this._authorization = `Basic ${credentials}`;
    this._tokenUUID = uuid;
    this._deviceId = deviceId;
    return this._dictionaries.already$.pipe(
      switchMap(() => combineLatest([this.labelGroups$, this.getLabel$(id)])),
      switchMap(([labelGroupsDict, label]) => {
        const { name, avatarImageUrl, labelGroups }: IDictionaryLabelsItem = label;
        this.setManager(labelGroupsDict, id);
        this._user = new User({
          id,
          name,
          deviceId,
          labelGroups,
          tokenUUID: this._tokenUUID,
          avatarUrl: avatarImageUrl || DEFAULT_USER_AVATAR,
          authorization: this._authorization,
        });
        this._user.setLabelGroupsManager(labelGroupsDict);
        this._label = label;
        this.updateUser$();
        return of(true);
      }),
    );
  }

  setManager(groups: ILabelGroups[], userId: number): void {
    const managerIds = groups.reduce((acc, item) => {
      acc.push(...item.managers);
      return acc;
    }, []);
    this._isManager = managerIds.includes(userId);
  }

  updateUser$(): void {
    this._user$.next(this._user);
  }

  private getLabel$(id = this._user.id): Observable<IDictionaryLabelsItem> {
    return this._dictionaries.getDictionaryItemByKey('labels', id);
  }

  private get labelGroups$(): Observable<IDictionary<ILabelGroups>> {
    return this._dictionaries.getDictionary<ILabelGroups[]>('labelGroups');
  }

  isReservationOrganizer(reservation: IWorkplaceReservation): boolean {
    if (reservation && this._label) {
      return this._label.id === reservation.labelId;
    }
    return false;
  }
  isAppointmentOrganizer(appointment: IAppointment): boolean {
    if (appointment && this._label) {
      return this._label.mail.toLowerCase() === appointment.appointmentOrganizerMail.toLowerCase();
    }
    return false;
  }

  private get _cookieName(): string {
    return this.$config.get<string>('authTokenCookieName') || 'auth';
  }
}
