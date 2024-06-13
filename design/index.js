import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import vueHook from 'alova/vue';
import { createApis, withConfigType } from './createApis';

export const alovaInstance = createAlova({
  baseURL: '/api',
  statesHook: vueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest: method => {},
  responded: res => {
    return res.json();
  }
});

export const $$userConfigMap = withConfigType({});

const Apis = createApis(alovaInstance, $$userConfigMap);

// 如果是全局定义
window.Apis = Apis;

// 如果不是则直接导出
// export Apis;
