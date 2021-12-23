export interface IAppError extends Record<string, any> {
  isError?: boolean;
  code?: number | string;
  title?: string;
  subtitle?: string;
  message?: string;
}

export class AppError implements IAppError {
  code: number | string;
  isError: boolean = true;
  message: string;
  subtitle: string;
  title: string;

  constructor(props: Partial<IAppError>);
  constructor(code: string | number, message: string, title: string, subTitle?: string);
  constructor(codeOrProps: string | number | Partial<IAppError>, message?: string, title?: string, subtitle?: string) {
    if (isErrorObject(codeOrProps)) {
      Object.assign(this, codeOrProps);
      return;
    }

    this.code = codeOrProps;
    this.message = message;
    this.subtitle = subtitle;
    this.title = title;
  }
}

function isErrorObject(codeOrProps: string | number | Partial<IAppError>): codeOrProps is Partial<IAppError> {
  return codeOrProps && typeof codeOrProps === 'object';
}


const err: AppError = new AppError({  })
