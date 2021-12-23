import { IBreadcrumbs } from '@base/breadcrumb/breadcrumb.model';

export interface ICurrentRouteData {
  title: string;
  breadcrumbs: IBreadcrumbs;
  showBackBtn?: boolean;
}
