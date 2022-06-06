import { extractErrorMeta } from './error';
export * from './error';

// ------------------------ external code ------------------------
import { http } from "./http";


// 默认错误事件监听器
export function scriptErrorListener(stackInfo, isWindowError, error) {
  const errorMeta = extractErrorMeta(stackInfo, error);

  // TODO: 对于第三方链接，不使用 pathname
  // script error, 不实用pathname
  function extractSlat() {
    const { lineno, colno } = errorMeta;
    const filename = errorMeta.filename || location.href;
    const descriptor = new URL(filename);
    const s = [descriptor.pathname, lineno || 0, colno || 0].join('-');
    return s;
  }

  const body = {
    projectId: 1,
    version: '0.0.1',
    level: 2,
    slat: extractSlat(),
    errorMeta,
    extras: {
      '创建时间': Date.now(),
      '页面地址': location.href
    },
    userAgent: navigator.userAgent,
  };

  http({
    method: 'post',
    url: '/api/script/create',
    data: body,
  }).catch(() => {});
}