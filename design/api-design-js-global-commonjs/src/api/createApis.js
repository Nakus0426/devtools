/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Generator - version 3.0.57
 *
 * This is an online swagger codegen server.  You can find out more at https://github.com/swagger-api/swagger-codegen or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
 *
 * OpenAPI version: 3.0.1
 *
 *
 * NOTE: This file is auto generated by the alova's vscode plugin.
 *
 * https://alova.js.org/devtools/vscode
 *
 * **Do not edit the file manually.**
 */
const { Method } = require('alova');
const apiDefinitions = require('./apiDefinitions');
/**
 *
 * @param {(string|symbol)[]} array
 * @param {Alova<any, any, any, any, any>} alovaInstance
 * @param {any} configMap
 * @returns {()=>void}
 */
const createFunctionalProxy = (array, alovaInstance, configMap) => {
  // create a new proxy instance
  return new Proxy(function () {}, {
    get(_, property) {
      // record the target property, so that it can get the completed accessing paths
      array.push(property);
      // always return a new proxy to continue recording accessing paths.
      return createFunctionalProxy(array, alovaInstance, configMap);
    },
    apply(_, __, [config]) {
      const apiItem = apiDefinitions[array.join('.')];
      if (!apiItem) {
        throw new Error(`the api path of \`${apiItem}\` is not found`);
      }
      const [method, url] = apiItem;
      const { pathParams, data } = config;
      const urlReplaced = url.replace(/\{([^}]+)\}/g, (_, key) => {
        const pathParam = pathParams[key];
        return pathParam;
      });
      delete config.pathParams;
      return new Method(method.toUpperCase(), alovaInstance, urlReplaced, config, data);
    }
  });
};
/**
 *
 * @param {Alova<any, any, any, any, any>} alovaInstance
 * @param {any} configMap
 * @returns
 */
const createApis = (alovaInstance, configMap) =>
  new Proxy(
    {},
    {
      get(_, property) {
        return createFunctionalProxy([property], alovaInstance, configMap);
      }
    }
  );

/**
 * @typedef {Parameters<typeof import('./index')['alovaInstance']['Get']>[1]} GetConfig
 */
/**
 * @typedef {{ [apiPath in keyof typeof import('./apiDefinitions')]?: NonNullable<GetConfig> }} MethodsConfigMap
 */
/**
 * @template {MethodsConfigMap} Config
 * @param {Config} config
 * @returns {Config}
 */
const withConfigType = config => config;

module.exports = {
  createApis,
  withConfigType
};
