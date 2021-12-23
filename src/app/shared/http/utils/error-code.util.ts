import { UNKNOWN_SERVER_ERROR } from '@app/shared/http/utils/constants.util';

export const errorCode: Record<string, number> = {
  '4000': 400,
  '4001': 401,
  '4002': 402,
  '4003': 403,
  '5000': 500,
  '5001': 501,
  '5002': 502,
  '5003': 503,
  '5012': 401
}

export const transformErrorCode: (code: string) => number = (code: string) =>
  errorCode[code] || errorCode['4000'];

export const transformErrorMessage: (message: string) => string = (message: string) =>
  message || UNKNOWN_SERVER_ERROR;
