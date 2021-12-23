import { MetaApiService } from '@shared/http/services/meta-api.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { UserApiService } from '@shared/http/services/user-api.service';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';
import { LogApiService } from './services/log-api.service';
import { DpaApiService } from './services/dpa-api.service';
import { AuthApiService } from '@shared/http/services/auth-api.service';

export const API_SERVICES: any[] = [
  LiveDataApiService,
  MetaApiService,
  ReservationsApiService,
  UserApiService,
  LogApiService,
  DpaApiService,
  AuthApiService
];
