import { Injectable } from '@angular/core';
import { Url } from '../models/url.model';
import { IEntry } from '../models/common.model';
import { isEmpty } from '../utils/instanceOf.utilI';

/* url-pattern example
 *
 * with replaced parameter
 * [http://host:port]/{:path-parameter}/page?q={:query-parameter}
 */

const PARAM_REGEX: RegExp = /:[a-zA-Z][a-zA-Z0-9_]+/g;
const HTTP_PROTOCOL_SEP: string = '://';

@Injectable()
export class UrlService {
  public concat(hostUrl: string, pathUrl: string): string {
    if (hostUrl.endsWith('/')) {
      hostUrl = hostUrl.slice(0, -1);
    }

    if (pathUrl && pathUrl.startsWith('/')) {
      pathUrl = pathUrl.slice(1);
    }

    if (!pathUrl) {
      return hostUrl;
    }

    return `${hostUrl}/${pathUrl}`;
  }

  public create(pattern: string = null, params: {} = null): Url {
    if (isEmpty(pattern)) {
      console.error('Cannot create Url-object with empty pattern');
      pattern = '';
    }

    return new Url(pattern, params, urlStringify);
  }

  public createUrl(pattern: string, params: IEntry<any> = {}): string | null {
    if (!pattern) {
      return null;
    }

    return this.stringify(this.create(pattern), params);
  }

  public stringify(url: Url, params: IEntry<any>): string {
    return url.stringify(params);
  }
}

function urlStringify(params: object, preStringify: boolean = false): string {
  let url: string = this.pattern;
  const paramsMatch: string[] = this.pattern.match(PARAM_REGEX);

  if (paramsMatch && paramsMatch.length > 0) {
    url = urlStringifyParams(url, paramsMatch, params);
  }

  if (preStringify) {
    return url;
  }

  url = url.replace(PARAM_REGEX, '');

  if (!url.includes(HTTP_PROTOCOL_SEP)) {
    return url.replace(/\/\//g, '/');
  }

  url = url
    .split(HTTP_PROTOCOL_SEP)
    .map((part) => part.replace(/\/\//g, '/'))
    .join(HTTP_PROTOCOL_SEP);

  return url;
}

function urlStringifyParams(
  url: string,
  paramsMatch: string[],
  params: object
): string {
  paramsMatch.forEach((paramMatch) => {
    const paramName = paramMatch.startsWith(':')
      ? paramMatch.slice(1)
      : paramMatch;

    if (
      typeof params[paramName] !== 'undefined' &&
      params[paramName] !== null &&
      params[paramName] !== ''
    ) {
      url = url.replace(paramMatch, params[paramName]);
    }
  });

  return url;
}
