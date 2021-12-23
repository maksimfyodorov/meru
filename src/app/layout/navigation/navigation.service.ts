import { Injectable } from '@angular/core';
import { INavigations } from '@app/layout/navigation/navigation.model';
import { filterNavigation, showHideQRNavigation } from '@app/layout/navigation/navigation.utils';
import { AppError } from '@core/models/app-errorl.model';
import { UserService } from '@core/services/user.service';
import { MetaApiService } from '@shared/http/services/meta-api.service';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { ILabelGroups } from '@src/app/shared/http/models/database.model';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class NavigationService {
  public collapse: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private $metaApi: MetaApiService,
    private $user: UserService,
    private $settings: SettingsService,
    private $dictionaries: DictionariesService,
  ) {}

  public get mainNavigation$(): Observable<any> {
    return combineLatest([
      this.$settings.getSettingByName$('workplaceReservationConfirmationMethod'),
      this.$metaApi.getMeta<INavigations>('navigation'),
      this.$dictionaries.already$
    ]).pipe(
      switchMap(([setting, nav]) => {
        let navigations: INavigations;
        if (!(nav instanceof AppError)) {
          navigations = nav as INavigations;
        }
        navigations = showHideQRNavigation(navigations, setting);
        return combineLatest([this.managerGroups$, this.$user.info$]).pipe(
          map(([groups, info]) => {
            if (groups && !Array.isArray(groups)) {
              groups = [groups];
            }
            return filterNavigation(navigations, info.labelGroups, groups);
          }),
        );
      }),
    );
  }

  get managerGroups$(): Observable<ILabelGroups[]> {
    return this.$dictionaries
      .getDictionary<ILabelGroups[]>('labelGroups')
      .pipe(
        map((groups) =>
          groups.filter((group) => this.$user.info.labelGroups.includes(group.id) && group.managers.includes(this.$user.info.id)),
        ),
      );
  }
}
