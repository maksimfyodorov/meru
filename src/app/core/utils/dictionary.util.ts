export enum InitialWords {
  alreadyExist = 'Already exist',
  configLoadingError = 'Config error: config load failed. Initialization front ' +
    'application was aborted. Please reload this page for repeat.',
  configValueError = 'Config error: value with code $code in not exist in values.',
  coreModuleAlreadyLoaded = 'CoreModule has already been loaded',
  coreModuleNotLoaded = 'CoreModule has not loaded',
  localStorageBadParsing = 'Local storage error: Bad parsing localstorage object with name $name.',
  localStorageBadStringify = 'Local storage error: Bad stringify object with name $name before stringify.',
  localStorageObjectNotSaved = 'Local storage error: Object with name $name not saved.',
  theWordWithKey = 'The word with key',

  /*Http errors*/
  accessDenied = 'Access denied',
  badRequest = 'Bad request',
  connectionFailed = 'Connection failed',
  internalServerError = 'Internal server error',
  notFound = 'Not found',
  unknownServerError = 'Unknown server error',
  serverUnavailable = 'Server unavailable now',
  'lang-ru' = 'Русский',
  'lang-en' = 'English',
  'lang-ar' = 'العربية',
}
