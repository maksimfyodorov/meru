import { HttpRequest } from '@angular/common/http';
import { DB_CACHE_RESPONSE_HEADER, LOCALIZATION_RESPONSE_REGEX } from '@shared/http/utils/constants.util';

export function checkInterceptCondition(
  request: HttpRequest<any>,
  cacheMeta: boolean,
  cacheLocalization: boolean
): boolean {
  return (cacheMeta && request.headers.has(DB_CACHE_RESPONSE_HEADER))
    || (cacheLocalization && LOCALIZATION_RESPONSE_REGEX.test(request.url))
}
