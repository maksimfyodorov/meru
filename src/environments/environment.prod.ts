export const environment = {
  production: true,
  bootConfigUrl: './assets/config/boot.config.prod.json',
  localizationsUrl: './assets/i18n/',
  indexedDbCacheResponse: true,
  authType: 'nornikel',
  apiUrl: '/rest',
  appVersion: require('../../package.json').version,
};
