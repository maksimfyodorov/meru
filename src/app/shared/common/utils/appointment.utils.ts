export enum AppointmentTypes {
  NEW  = 'New appointment',
  CONFIRMED = 'Appointment confirmed',
  DECLINED = 'Canceled appointment'
}
export interface IAppointmentTypesMap {
  value: string;
  name: string;
  order: number;
}

export const getTypeName = (type): IAppointmentTypesMap  => AppointmentTypesMap.find((app) => app.value === type);

export const AppointmentTypesMap: IAppointmentTypesMap[] = [
  {
    value: 'NEW',
    name: AppointmentTypes.NEW,
    order: 0
  },
  {
    value: 'CONFIRMED',
    name: AppointmentTypes.CONFIRMED,
    order: 1
  },
  {
    value: 'DECLINED',
    name: AppointmentTypes.DECLINED,
    order: 2
  },
];
