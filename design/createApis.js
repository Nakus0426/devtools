/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Generator - version 3.0.57
 *
 * This is an online swagger codegen server.  You can find out more at https:&#x2F;&#x2F;github.com&#x2F;swagger-api&#x2F;swagger-codegen or on [irc.freenode.net, #swagger](http:&#x2F;&#x2F;swagger.io&#x2F;irc&#x2F;).
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
import { Method } from 'alova';
import apiDefinitions from './apiDefinitions';

const createFunctionalProxy = (array, alovaInstance, configMap) => {
  // create a new proxy instance
  return new Proxy(function () {}, {
    get(_, property) {
      // record the target property, so that it can get the completed accessing paths
      array.push(property);
      // always return a new proxy to continue recording accessing paths.
      return createFunctionalProxy(array, alovaInstance, configMap);
    },
    apply(_, __, [data, config]) {
      const apiItem = apiDefinitions[array.join('.')];
      if (!apiItem) {
        throw new Error(`the api path of \`${apiItem}\` is not found`);
      }
      const [method, url] = apiItem;
      const urlReplaced = url.replace(/\{([^}]+)\}/g, (_, key) => {
        const pathParam = data[key];
        delete data[key];
        return pathParam;
      });
      // correct the params when request with different type
      if (/^POST|PUT|DELETE|PATCH$/i.test(method)) {
        config.params = data;
        data = undefined;
      }
      return new Method(method.toUpperCase(), alovaInstance, urlReplaced, config, data);
    }
  });
};

export const createApis = (alovaInstance, configMap) =>
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
 * @typedef {Object<string, NonNullable<GetConfig>>} MethodsConfigMap
 */
/**
 * @template {MethodsConfigMap} Config
 * @param {Config} config
 * @returns {Config}
 */
export const withConfigType = config => config;
