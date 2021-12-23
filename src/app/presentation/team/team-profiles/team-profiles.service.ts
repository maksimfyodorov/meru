import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { forkJoin, Observable } from 'rxjs';
import { IUser, IWorkplace, IWorkplaceReservation } from '@shared/http/models/database.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { findsTeammate } from '@presentation/team/team-profiles/team-profiles.utils';
import { TeamProfilesTableMeta } from '@presentation/team/team-profiles/team-profiles.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { DatePipe } from '@angular/common';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';
const DEFAULT_IMAGE = './assets/images/avatar-def.png';

@Injectable()
export class TeamProfilesService {
  constructor(
    private $user: UserService,
    private $dictionaries: DictionariesService,
    private $api: ReservationsApiService,
    private $measurements: MeasurementsService,
    private _datePipe: DatePipe,
    private $loader: GlobalLoaderService,
    private $liveDataApi: LiveDataApiService,
  ) {
    this.$loader.contentLoading$.next(true);
  }
  private _users: IUser[];
  private _reservations: IWorkplaceReservation[];
  private _activeLabelsIds: number[];
  private _workplaces: IWorkplace[];

  private _getApiDate(date: Date): string {
    return this._datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
  private _combiningData(): {
    user: IUser;
    reservation: IWorkplaceReservation;
    workplace: IWorkplace;
  }[] {
    return this._users.map((user) => {
      const reservation = this._reservations.find((_r) => _r.labelId === user.id);
      const workplace = this._workplaces.find((_w) => _w.id === reservation?.workplaceId);
      return {
        user,
        reservation,
        workplace,
      };
    });
  }
  get dateFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('date');
  }
  get team$(): Observable<IUser[]> {
    const groups = this.$user.info.labelGroups;
    return this.$dictionaries.getDictionary<IUser[]>('labels').pipe(
      map((users) => {
        return findsTeammate(users, groups);
      }),
    );
  }
  getTableMeta$(dateFrom: Date, dateTo: Date): Observable<TeamProfilesTableMeta[]> {
    return forkJoin([this.team$, this.$liveDataApi.get('activeLabels')]).pipe(
      map(([team, activeLabels]) => {
        this._activeLabelsIds = activeLabels.map((_a) => _a.id) || [];
        this._users = team;
        return team.map((user) => user.id);
      }),
      switchMap((userIds) =>
        this.$api
          .getWorkplaceReservations({
            labelIds: userIds,
            dateTimeFrom: this._getApiDate(dateFrom),
            dateTimeTo: this._getApiDate(dateTo),
          })
          .pipe(
            map((reservations) => {
              this._reservations = reservations;
              return reservations.map((res) => res.workplaceId);
            }),
          ),
      ),
      switchMap((workplaceIds: number[]) =>
        this.$dictionaries
          .getDictionary<IWorkplace[]>('workplaces')
          .pipe(map((workplaces) => workplaces.filter((w) => workplaceIds.includes(w.id)))),
      ),
      map((workplaces) => {
        this._workplaces = workplaces;
        return this._combiningData();
      }),
      map((data) => {
        return data.map(({ user, workplace, reservation }) => {
          return {
            userId: user.id,
            name: user.name,
            mainPhone: user.mainPhone,
            mail: user.mail,
            img: user.avatarImageUrl || DEFAULT_IMAGE,
            date: reservation?.dateTimeCreated,
            workplace: workplace?.name,
            status: this._activeLabelsIds.includes(user.id) ? 'office' : 'home',
          };
        });
      }),
      shareReplay(1),
      tap(() => this.$loader.contentLoading$.next(false)),
    );
  }
  get dateFormat(): string {
    return this.$measurements.getMeasurementByName('date');
  }
}
