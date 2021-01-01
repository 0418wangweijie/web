/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609419369693_2989';

  // add your middleware config here
  config.middleware = [];

  // 数据库
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/peopel',
      options: {
        useNewUrlParser: true,
      },
      // plugins: [],
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    // 那些可以跨域访问
    // origin: ['http://localhost:3000', 'http://localhost:9000'],
    origin: 'http://localhost:3000',
    // 允许Cook跨域请求
    credentials: true,
    // 那些请求可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  config.security = {
    // scrf: {
    //   headerName: 'x-csrf-token',
    //   // enable: false,
    //   // ignoreJSON: true,
    // },
    // // xframe: {
    // //   enable: false,
    // // },
    // domainWhiteList: ['*'],
    csrf: { enable: false },
    domainWhiteList: ['*']
  };

  return {
    ...config,
    ...userConfig,
  };
};
