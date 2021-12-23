import {IActionRequestParamsBody} from '@core/models/actions.model';

export function mapRequestBody<T extends any = Record<string, any>>(data: Record<string, any>, body: IActionRequestParamsBody): T {
  if (!(body instanceof Object) || !Object.keys(body).length) {
    return data as T;
  }

  const actionData: T = {} as T;

  Object
    .entries(body)
    .forEach(([to, from]) => {
      if (typeof from === 'string') {
        actionData[to] = data[from];
        return;
      }

      let value: any = data[from.field];
      switch (from?.convertTo) {
        case 'integer':
          value = parseInt(value, 10);
          break;

        case 'float':
          value = parseFloat(value);
          break;

        case 'boolean':
          value = Boolean(value);
          break;

        case 'string':
          value = value?.toString() || String(value);
          break;
      }

      actionData[to] = value;
    });

  return actionData as T;
}
