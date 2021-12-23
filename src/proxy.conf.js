// http://178.213.145.180:8095 || https://frontews.merusoft.ru/back || https://frontdemo.merusoft.ru || https://coworking-t.nornik.ru/back || https://coworking.nornik.ru/back
module.exports = [
  {
    context: ["/temp"],
    target: "https://itest.merusoft.ru/back/",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
  },
  {
    context: ["/api", "/rest"],
    target: "https://itest.merusoft.ru/back/rest",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
      "^/rest": "",
    },
    logLevel: "debug",
  },
];
