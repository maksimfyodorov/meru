import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, TemplateRef, ViewChild, HostListener } from '@angular/core';
import { TeamProfilesService } from '@presentation/team/team-profiles/team-profiles.service';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { TeamProfilesTableMeta } from '@presentation/team/team-profiles/team-profiles.model';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { first } from 'rxjs/operators';
import { ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { UserService } from '@src/app/core/services/user.service';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { ColorAlias } from '@src/theme/ts';

@Component({
  selector: 'app-team-profiles',
  templateUrl: './team-profiles.component.html',
  styleUrls: ['./team-profiles.component.less'],
  providers: [TeamProfilesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamProfilesComponent implements OnDestroy {
  isVisible: boolean = false;
  guestForm: FormGroup;
  statusOptions = {
    map: {
      home: {
        color: 'danger',
        value: 'At home',
      },
      office: {
        color: 'success',
        value: 'In the office',
      },
    },
  };
  initialQuery = '';
  photoFilename = '';

  @ViewChild('modalFooterTpl') modalFooterTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;

  @ViewChild('filesInput') filesInput: ElementRef;

  @Subscriptions()
  sub: Subscription;
  dataFormat: string = this.$service.dateFormat;
  table: Record<string, any> = {
    data: [],
  };
  dateTimeLifetimeTo = null;
  @Subscribe<string>()
  dateFormat;

  loading = false;

  private _dateOfDataFrom: Date;
  private _dateOfDataTo: Date;

  @HostListener('window:resize', ['$event'])
  private _resize(): void {
    this.cdr.detectChanges();
  }

  test = 1;
  constructor(
    private $service: TeamProfilesService,
    private $dictionariesService: DictionariesService,
    private cdr: ChangeDetectorRef,
    private $router: Router,
    private _modal: NzModalService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private $measurements: MeasurementsService,
    private $user: UserService,
    private _innerWidthService: InnerWidthService,
  ) {
    this.photoFilename = '';
    this.guestForm = this.fb.group({
      name: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.email]],
      phones: [null, []],
      category: [null, []],
      post: [null, []],
      description: [null, []],
      cardNumber: [null, []],
      inviterId: [null, []],
      avatarImageBytes: [null, []],
      dateTimeLifetimeTo: [null, [Validators.required]],
      uid: ['', []],
    });
    this.dateFormat = this.$service.dateFormat$;
    this._dateOfDataFrom = new Date();
    this._dateOfDataFrom.setHours(6, 0, 0, 0);
    this._dateOfDataTo = new Date();
    this._dateOfDataTo.setHours(23, 0, 0, 0);
    this.getData();
  }

  getData() {
    this.loading = true;
    this.sub = this.$service
      .getTableMeta$(this._dateOfDataFrom, this._dateOfDataTo)
      .pipe(first())
      .subscribe((tableMeta) => {
        this.table.data = tableMeta;
        this.loading = false;
        this.cdr.detectChanges();
      });
  }

  onClick(row: TeamProfilesTableMeta): void {
    this.$router.navigateByUrl(this.generateLink(row.userId));
  }

  generateLink(id: number): string {
    return `/team/profiles/${id}`;
  }

  ngOnDestroy(): void {}

  onAddProfile() {
    this.dateTimeLifetimeTo = null;
    this.guestForm.reset();
    this.guestForm.patchValue({
      inviterId: this.$user.info.id,
      category: 3,
    });
    this._modal.create({
      nzContent: this.modalContentTpl,
      nzFooter: this.modalFooterTpl,
    });
  }

  onAddGuest() {
    this.loading = true;
    this.$dictionariesService
      .putDictionaries('labels', this.guestForm.value)
      .pipe(first())
      .subscribe((res) => {
        if (res.success) {
          this.$dictionariesService
            .updateDictionaryItem('labels', res.data)
            .pipe(first())
            .subscribe(() => {
              this.sub = this.$service.getTableMeta$(this._dateOfDataFrom, this._dateOfDataTo).subscribe((tableMeta) => {
                this.table.data = tableMeta;

                this.cdr.markForCheck();
                this.loading = false;
                this._modal.closeAll();
              });
            });
        } else {
          this._modal.closeAll();
          this._modal.error({
            nzTitle: 'Error adding guest',
            nzMaskClosable: true,
          });
          this.loading = false;
        }
      });
  }

  cancelAdd() {
    this._modal.closeAll();
  }

  onInput() {
    this.guestForm.patchValue({
      uid: 'label_user_' + this.transliterate(this.guestForm.value.name),
    });
    this.cdr.detectChanges();
  }

  handleUpload(event) {
    const file = event.target.files[0];
    if (file.size > 40000) {
      this._modal.error({
        nzTitle: 'File size must be no more than 30kb',
        nzMaskClosable: true,
      });
    } else {
      this.photoFilename = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.guestForm.patchValue({
          avatarImageBytes: reader.result.toString().replace(/^data:image\/[a-z]+;base64,/, ''),
        });
        this.cdr.detectChanges();
      };
    }
  }

  onOpenFilesInput() {
    this.filesInput.nativeElement.value = '';
    this.filesInput.nativeElement.click();
  }

  transliterate(word) {
    let answer = '',
      a = {};

    a['??'] = 'YO';
    a['??'] = 'I';
    a['??'] = 'TS';
    a['??'] = 'U';
    a['??'] = 'K';
    a['??'] = 'E';
    a['??'] = 'N';
    a['??'] = 'G';
    a['??'] = 'SH';
    a['??'] = 'SCH';
    a['??'] = 'Z';
    a['??'] = 'H';
    a['??'] = "'";
    a['??'] = 'yo';
    a['??'] = 'i';
    a['??'] = 'ts';
    a['??'] = 'u';
    a['??'] = 'k';
    a['??'] = 'e';
    a['??'] = 'n';
    a['??'] = 'g';
    a['??'] = 'sh';
    a['??'] = 'sch';
    a['??'] = 'z';
    a['??'] = 'h';
    a['??'] = "'";
    a['??'] = 'F';
    a['??'] = 'I';
    a['??'] = 'V';
    a['??'] = 'a';
    a['??'] = 'P';
    a['??'] = 'R';
    a['??'] = 'O';
    a['??'] = 'L';
    a['??'] = 'D';
    a['??'] = 'ZH';
    a['??'] = 'E';
    a['??'] = 'f';
    a['??'] = 'i';
    a['??'] = 'v';
    a['??'] = 'a';
    a['??'] = 'p';
    a['??'] = 'r';
    a['??'] = 'o';
    a['??'] = 'l';
    a['??'] = 'd';
    a['??'] = 'zh';
    a['??'] = 'e';
    a['??'] = 'Ya';
    a['??'] = 'CH';
    a['??'] = 'S';
    a['??'] = 'M';
    a['??'] = 'I';
    a['??'] = 'T';
    a['??'] = "'";
    a['??'] = 'B';
    a['??'] = 'YU';
    a['??'] = 'ya';
    a['??'] = 'ch';
    a['??'] = 's';
    a['??'] = 'm';
    a['??'] = 'i';
    a['??'] = 't';
    a['??'] = "'";
    a['??'] = 'b';
    a['??'] = 'yu';

    for (let i in word) {
      if (word.hasOwnProperty(i)) {
        if (a[word[i]] === undefined) {
          answer += word[i];
        } else {
          answer += a[word[i]];
        }
      }
    }
    return answer;
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }

  onSetDate(ev) {
    this.guestForm.patchValue({
      dateTimeLifetimeTo: this._getApiDate(new Date(ev)),
    });
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  public openItem(data: Record<string, any>): void {
    this.$router.navigate([this.$router.url, data.userId]);
  }

  onQuery(query: string) {
    this.initialQuery = query;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  nextDay() {
    this.test++;
    this._dateOfDataFrom.setDate(this._dateOfDataFrom.getDate() + 1);
    this._dateOfDataTo.setDate(this._dateOfDataTo.getDate() + 1);
    this.getData();
  }
  previousDay() {
    this._dateOfDataFrom.setDate(this._dateOfDataFrom.getDate() - 1);
    this._dateOfDataTo.setDate(this._dateOfDataTo.getDate() - 1);
    this.getData();
  }

  get dateOfData() {
    return this.datePipe.transform(this._dateOfDataFrom, this.dateFormat);
  }

  getColor(mappedColor: string) {
    return ColorAlias[mappedColor] || ColorAlias.default;
  }
}
