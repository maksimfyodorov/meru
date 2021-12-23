import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {
  IReservationByQr,
  ReservationActionType,
  ReservationDateRange,
  ReservationObjectType,
} from './reservation-by-qr.model';
import { ReservationByQRService } from './reservation-by-qr.service';
import { getReservationId } from './reservation-by-qr.util';

@Component({
  selector: 'app-reservation-by-qr',
  templateUrl: './reservation-by-qr.component.html',
  styleUrls: ['./reservation-by-qr.component.less'],
})
export class ReservationByQRComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  minDateTime = new Date();

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  reservation: IReservationByQr | undefined;
  gotQrResult: boolean = false;

  reservationDateRange: ReservationDateRange | undefined;

  constructor(
    private modal: NzModalRef,
    private $modalService: NzModalService,
    private $service: ReservationByQRService
  ) {}

  ngOnInit(): void {
    this.reservationDateRange = this.$service.reservationDateRange;
  }

  get placeInfo(): string {
    return this.floorName + ', ' + this.placeName;
  }

  get floorName(): string {
    return this.reservation?.floor?.name ? this.reservation?.floor?.name : '';
  }

  get placeName(): string {
    return this.reservation?.objectData?.name
      ? this.reservation?.objectData?.name
      : '';
  }

  get reservationType(): ReservationObjectType {
    return this.reservation?.objectType;
  }

  get actionType(): ReservationActionType {
    return this.reservation?.actionType;
  }

  get placeId(): number {
    return this.reservation?.objectData?.id;
  }

  get reservationId(): number {
    return getReservationId(this.reservation);
  }

  get actionMessage(): string {
    switch (this.actionType) {
      case 'WORKPLACE_RESERVATION_CANCEL':
        return this.reservationCancelMessage;
      case 'WORKPLACE_RESERVATION_CONFIRM':
        return this.reservationConfirmMessage;
      case 'WORKPLACE_RESERVATION_ALREADY_EXISTS':
        return this.reservationAlreadyExistsMessage;
      case 'WORKPLACE_DISABLED_BY_LABEL_PROPERTIES':
        return this.reservationDisabledByLabelMessage;
      case 'WORKPLACE_DISABLED_BY_SOCIAL_DISTANCE':
        return this.reservationDisabledBySocialDistanceMessage;
      case 'APPOINTMENT_VIEW':
      case 'WORKPLACE_VIEW':
      case 'WORKPLACE_RESERVATION_VIEW':
        return this.reservationViewMessage;
      case 'APPOINTMENT_CREATE':
      case 'WORKPLACE_RESERVATION_CREATE':
      default:
        return this.reservationCreateMessage;
    }
  }

  get reservationCreateMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Reserve a workplace';
      case 'APPOINTMENT':
        return 'Reserve a meeting room';
      case 'PARKING_LOT':
        return 'Reserve a parking space';
      default:
        return '';
    }
  }

  get reservationCancelMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Cancel workplace reservation';
      case 'APPOINTMENT':
        return 'Cancel meeting room reservation';
      case 'PARKING_LOT':
        return '"Cancel parking reservation":';
      default:
        return '';
    }
  }

  get reservationConfirmMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Confirm workplace reservation';
      case 'APPOINTMENT':
        return 'Confirm meeting room reservation';
      case 'PARKING_LOT':
        return 'Confirm parking reservation';
      default:
        return '';
    }
  }

  get reservationAlreadyExistsMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'You have already booked a workplace';
      case 'APPOINTMENT':
        return 'You have already booked a meeting room';
      case 'PARKING_LOT':
        return 'You have already booked a parking space';
      default:
        return '';
    }
  }

  get reservationDisabledByLabelMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Workplace is unavailable';
      case 'APPOINTMENT':
        return 'Meeting room is unavailable';
      case 'PARKING_LOT':
        return 'Parking space is unavailable';
      default:
        return '';
    }
  }

  get reservationDisabledBySocialDistanceMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Workplace is unavailable due to breach of social distance';
      case 'APPOINTMENT':
        return 'Room is unavailable due to breach of social distance';
      case 'PARKING_LOT':
        return 'Parking space is unavailable due to breach of social distance';
      default:
        return '';
    }
  }

  get reservationViewMessage(): string {
    switch (this.reservationType) {
      case 'WORKPLACE':
        return 'Workplace';
      case 'APPOINTMENT':
        return 'Meeting room';
      case 'PARKING_LOT':
        return 'ParkingLot';
      default:
        return '';
    }
  }

  get canCreateReservation(): boolean {
    return (
      this.actionType === 'APPOINTMENT_CREATE' ||
      this.actionType === 'WORKPLACE_RESERVATION_CREATE'
    );
  }

  get canCancelReservation(): boolean {
    return this.actionType === 'WORKPLACE_RESERVATION_CANCEL';
  }

  get canConfirmReservation(): boolean {
    return this.actionType === 'WORKPLACE_RESERVATION_CONFIRM';
  }

  get reservationAlreadyExists(): boolean {
    return this.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS';
  }

  get reservationDisabled(): boolean {
    return (
      this.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS' ||
      this.actionType === 'WORKPLACE_DISABLED_BY_LABEL_PROPERTIES' ||
      this.actionType === 'WORKPLACE_DISABLED_BY_SOCIAL_DISTANCE' ||
      this.actionType === 'APPOINTMENT_VIEW' ||
      this.actionType === 'WORKPLACE_RESERVATION_VIEW' ||
      this.actionType === 'WORKPLACE_VIEW'
    );
  }

  clearResult(): void {
    this.reservation = undefined;
  }

  onCodeResult(qrCode: string) {
    this.$service.getReservationByQR(qrCode).subscribe((reservation) => {
      this.reservation = reservation;
      this.gotQrResult = true;
    });
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    this.onDeviceSelectChange();
  }

  onDeviceSelectChange() {
    const device = this.availableDevices[0];
    this.currentDevice = device || null;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  yesAction(): void {
    switch (this.actionType) {
      case 'WORKPLACE_RESERVATION_CANCEL':
        this.cancelReservation();
        break;
      case 'WORKPLACE_RESERVATION_CONFIRM':
        this.confirmReservation();
        break;
      case 'APPOINTMENT_CREATE':
      case 'WORKPLACE_RESERVATION_CREATE':
        this.reservationPlace();
        break;
      default:
        this.destroyModal();
        break;
    }
  }

  reservationPlace() {
    this.$service
      .reservationPlaceByType(
        this.reservationType,
        this.placeId,
        this.reservationDateRange?.value
      )
      .subscribe((reservations) => {
        this.$modalService.closeAll();
        const main = reservations.find((r) => r.meta.recordCode === 'main');
        if (reservations.length === 1) {
          if (main.meta.isOk) {
            this.$modalService.success({
              nzTitle: 'Booked successfully',
              nzContent: main.meta.message,
              nzMaskClosable: true,
            });
          } else {
            this.$modalService.error({
              nzTitle: 'Failed to book',
              nzContent: main.meta.message,
            });
          }
        }
      });
  }

  cancelReservation() {
    this.$service
      .cancelReservationByType(this.reservationType, this.reservationId)
      .subscribe((success) => {
        this.$modalService.closeAll();
        if (success) {
          this.$modalService.success({
            nzTitle: 'Booking canceled successfully',
            nzMaskClosable: true,
          });
        } else {
          this.$modalService.error({
            nzTitle: 'Failed to cancel booking',
            nzMaskClosable: true,
          });
        }
      });
  }

  confirmReservation() {
    this.$service
      .confirmReservationByType(this.reservationType, this.reservationId)
      .subscribe((success) => {
        this.$modalService.closeAll();
        if (success) {
          this.$modalService.success({
            nzTitle: 'Booking confirmed successfully',
            nzMaskClosable: true,
          });
        } else {
          this.$modalService.error({
            nzTitle: 'Failed to confirm booking',
            nzMaskClosable: true,
          });
        }
      });
  }

  destroyModal(): void {
    this.modal.destroy();
  }
}
