import { ReservationType } from '@shared/http/models/meta.model';
import { IListRows } from '@base/list/models/list.model';
import { IStatusesMap } from '@shared/dictionaries/models/statuses.model';
import { ICalendarEvents } from '@base/calendar/calendar.model';
import { IWorkplaceReservationsMassActionRequest, IWorkplaceReservationsMassActionRequestReservation } from '@shared/http/models/request.model';
import { IHttpResponse } from '@core/models/http.model';
import {
  IWorkplaceReservationsMassActionResponse,
  IWorkplaceReservationsMassActionResponseItem,
  IWorkplaceReservationsMassActionResponseMeta,
} from '@shared/http/models/response.model';
import { MessageService } from '@core/services/message.service';
import { formatDate } from '@angular/common';
import { mapRequestBody } from '@base/action/action.utils';

export const WORKPLACE_TEMPLATE: string = '${for workplace} ${workplaceName}, ${floor} ${floorNumber}, ${buildingName} ${at} ${dateFrom} - ${dateTo}';

const metaKey: Record<ReservationType, string> = {
  appointment: 'reservationsAppointment',
  locker: '',
  parking: 'reservationsParking',
  workplace: 'reservationsWorkplace',
};

export function getMetaNameByReservationType(reservationType: ReservationType): string {
  return metaKey[reservationType];
}

export function createCalendarEvents(data: IListRows): ICalendarEvents {
  if (!data) return [];
  return data.map((item, index) => ({
    id: index,
    start: new Date(item.appointmentDateFrom),
    end: new Date(item.appointmentDateTo),
    title: `${item.appointmentSubject}, ${item.appointmentLocationString}`,
    data: item,
    cssClass: 'calendar-busy-area-room',
  }));
}

export function prepareMassActionRequest(data: IListRows, body: Record<string, any>): IWorkplaceReservationsMassActionRequest {
  return {
    reservations: data.map((item) => mapRequestBody<IWorkplaceReservationsMassActionRequestReservation>(item, body)),
  };
}

export function mapMassActionRequest(
  { success, error, data }: IHttpResponse<IWorkplaceReservationsMassActionResponse>,
  reservations: IListRows,
  $message: MessageService,
): IWorkplaceReservationsMassActionResponseMeta[] {
  if (!success) return [];

  return data.map(({ meta }: IWorkplaceReservationsMassActionResponseItem) => {
    if (!meta.isOk) {
      const reservation: Record<string, any> = reservations.find(({ id }) => meta.recordCode == id);
      const vars: Record<string, any> = {
        floorNumber: reservation.floor,
        workplaceName: reservation.workplace,
        buildingName: reservation.building,
        dateFrom: formatDate(reservation.dateTimeFrom, 'dd.MM.yy', 'ru'),
        dateTo: formatDate(reservation.dateTimeTo, 'dd.MM.yy', 'ru'),
      };
      const message: string = $message.construct(WORKPLACE_TEMPLATE, vars);
      meta.message = $message.concat(meta.message, message, ' ');
    }

    return meta;
  });
}
