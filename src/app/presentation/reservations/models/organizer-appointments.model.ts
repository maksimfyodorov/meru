import {IOrganizerAppointmentsResponse} from '@shared/http/models/response.model';

export interface IOrganizerAppointment {
  appointmentSubject: string;
  appointmentDateTo: Date;
  appointmentLocationString: string;
  appointmentParentId: string;
  appointmentId: string;
  appointmentStatus: string;
  appointmentAttendeeStatus: string;
  appointmentAttendees: string[];
  appointmentLocationIds: number[];
  appointmentDateFrom: Date;
  appointmentLocationArray: number;
  appointmentOrganizerMail: string;
}

export class OrganizerAppointments {

}

export class OrganizerAppointment implements IOrganizerAppointment{
  public appointmentAttendeeStatus: string;
  public appointmentAttendees: string[];
  public appointmentDateFrom: Date;
  public appointmentDateTo: Date;
  public appointmentId: string;
  public appointmentLocationArray: number;
  public appointmentLocationIds: number[];
  public appointmentLocationString: string;
  public appointmentOrganizerMail: string;
  public appointmentParentId: string;
  public appointmentStatus: string;
  public appointmentSubject: string;

  constructor(
    public organizerAppointment: Record<string, any>
  ) {
    Object.assign(this, organizerAppointment);

    this.appointmentDateFrom = new Date(this.appointmentDateFrom);
    this.appointmentDateTo = new Date(this.appointmentDateTo);
  }
}
