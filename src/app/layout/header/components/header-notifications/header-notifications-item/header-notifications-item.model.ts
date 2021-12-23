export type NotificationItemType = 'success' | 'info' | 'warning' | 'error';

export interface INotificationItem {
  id: string; // Уникальный
  type: NotificationItemType;
  message: string;
}
