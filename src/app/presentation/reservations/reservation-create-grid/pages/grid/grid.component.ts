import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MarkForCheck } from '@src/app/core/decorators/async.decorator';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { IAppointment, IBuilding, IFloor } from '@src/app/shared/http/models/database.model';
import { ReservationType } from '@src/app/shared/http/models/meta.model';
import { timeStamp } from 'console';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subscription } from 'rxjs';
import { checkReservedNeighbors, getDistanceCheckConfirmModal } from '../../../utils/reservation';
import { FilterService } from '../../services/filter.service';
import { ReservationCreateGridService } from '../../services/reservation-create-grid.service';
import { FloorService } from '../floor/floor.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  public formGroup: FormGroup = this._filterService.formGroup;

  @Subscriptions()
  sub: Subscription;

  resultList$: Observable<any[]>;

  tags: string[] = [];

  isLoading: boolean;
  buildingsList: any[] = [];

  type: ReservationType;

  filters$: Observable<Record<string, string | number>>;

  currentReservation: Record<string, string | number> = {};
  reservations: Record<string, Array<any>> = {
    success: [],
    errors: [],
  };

  allReservations: any[];

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('reservationModalTpl') reservationModalTpl: TemplateRef<any>;

  isModalVisible = false;

  constructor(
    private _reservationCreateGridService: ReservationCreateGridService,
    private _filterService: FilterService,
    private _translatePipe: TranslatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private _innerWidthService: InnerWidthService,
  ) {}

  ngOnInit(): void {
    const { type } = this._route.snapshot.parent.params;
    if (type) {
      this.type = type;
      this._filterService.createFormGroup(type);
      this.filters$ = this._filterService.itemsFilter$;
      this.sub = this._reservationCreateGridService.getBuildingsList$(type).subscribe((s) => {
        this.buildingsList = s;
        this._cdr.markForCheck();
      });
      this.resultList$ = this._reservationCreateGridService.getResultList$(type);
      this.sub = this._filterService.tagsFilter$.subscribe((s) => {
        this.tags = s;
        this._cdr.markForCheck();
      });
      this.sub = this._reservationCreateGridService.isLoading$.subscribe((s) => {
        this.isLoading = s;
        this._cdr.markForCheck();
      });
    }
  }

  onLink() {
    this._router.navigate([this._router.url, this.formGroup.value.floorsId[0]]);
  }

  onSelectBuildingIndex(index: number) {
    this._filterService.currentBuildingIndex = index;
    this._cdr.markForCheck();
  }

  get currentBuildingIndex() {
    return this._filterService.currentBuildingIndex;
  }

  get isLoading$() {
    return this._reservationCreateGridService.isLoading$;
  }

  get dateTimeFormat() {
    return this._reservationCreateGridService.dateTimeFormat;
  }

  get calendarLink(): string {
    switch (this._route.snapshot.params.type) {
      case 'appointment':
        return 'reservations/calendar/appointment/';
      case 'workplace':
        return 'reservations/calendar/workplace/';
      case 'parking':
        return 'reservations/calendar/parking/';
      default:
        return null;
    }
  }

  handleReservation(place): void {
    if (place.labelIdPermanentAssignment > 0) {
      this._modal.create({
        nzTitle: this._translatePipe.transform('Reservation information'),
        nzContent: this._translatePipe.transform('This place is assigned to another user, are you sure you want to book it?'),
        nzFooter: [
          {
            label: this._translatePipe.transform('Cancel'),
            onClick: () => {
              this._modal.closeAll();
            },
          },
          {
            label: 'Ок',
            type: 'primary',
            onClick: () => {
              this._modal.closeAll();
              this.reservationPlace(place);
            },
          },
        ],
      });
    } else {
      this.reservationPlace(place);
    }
  }

  reservationPlace(place): void {
    this.currentReservation.buildName = place.building.name;
    this.currentReservation.placeName = place.name;
    this.currentReservation.floorNumber = place.floor.name;
    let loading = false;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: [
        {
          label: this._translatePipe.transform('Cancel'),
          onClick: () => {
            this._modal.closeAll();
          },
        },
        {
          label: this._translatePipe.transform('Approve'),
          type: 'primary',
          loading: loading,
          onClick: () => {
            this._modal.closeAll();
            loading = true;
            this._reservationCreateGridService.reservationPlace(place.id, this.type).then(({ data, dates, filters, error }) => {
              loading = false;
              if (!data) {
                this._modal.error({
                  nzTitle: this._translatePipe.transform('Failed to book'),
                  nzContent: error.message,
                });
                return;
              }
              const main = data.find((r) => r.meta.recordCode === 'main');
              if (data.length === 1) {
                if (main.meta.isOk) {
                  this._modal.success({
                    nzTitle: this._translatePipe.transform('Booked successfully'),
                    nzContent: main.meta.message,
                  });
                } else {
                  this._modal.error({
                    nzTitle: this._translatePipe.transform('Failed to book'),
                    nzContent: main.meta.message,
                  });
                }
              } else {
                this.reservations.errors = [];
                if (main.meta.isOk) {
                  this.reservations.success = [main.meta.message || place.name];
                } else {
                  const successReservation = data.find((r) => r.meta.isOk);
                  if (successReservation) {
                    this.reservations.success = [successReservation.meta.message || place.name];
                  }
                  this.reservations.errors = [
                    {
                      dates: [filters.dateTimeFrom, filters.dateTimeTo],
                      message: main.meta.message || this._translatePipe.transform('Failed to book'),
                    },
                  ];
                }
                this.reservations.errors = [
                  ...this.reservations.errors,
                  ...data
                    .filter((r) => !r.meta.isOk && r.meta.recordCode !== 'main')
                    .map((r) => ({
                      dates: dates[r.meta.recordCode],
                      message: r.meta.message || this._translatePipe.transform('Failed to book'),
                    })),
                ];
                this._modal.create({
                  nzTitle: this._translatePipe.transform('Reservation information'),
                  nzContent: this.reservationModalTpl,
                  nzFooter: [
                    {
                      label: 'Ок',
                      type: 'primary',
                      onClick: () => {
                        this._modal.closeAll();
                      },
                    },
                  ],
                });
              }
              this._filterService.setFilters(this._filterService.filters);
            });
          },
        },
      ],
    });
  }

  getDays(days: number[]): string {
    return days.map((day) => this._translatePipe.transform(`Days.${day}`)).join(', ');
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  get shortDateTime() {
    return this._filterService.shortDateTime;
  }

  get repeatFilter$(): Observable<any> {
    return this._filterService.repeatFilterStr$;
  }

  showFilter() {
    this.isModalVisible = true;
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }
}
