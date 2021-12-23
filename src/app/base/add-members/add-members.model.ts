export interface IAddMembersItem {
  label: string;
  value: string;
  theme?: 'blue' | 'red';
  answer?: 'TENTATIVE' | 'ACCEPT' | 'DECLINE';
}
export interface IAddMembersAppointment {
  from: string;
  to: string;
}
