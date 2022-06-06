import TraceKit from 'tracekit';

// 代理 setTimeout, setInterval, 捕捉回调函数的错误
// 使用代理会导致错误栈的顺序出现问题
// TraceKit.extendToAsynchronousCallbacks();

// 不分析错误栈上下文
// 生产环境都是经过压缩的可能只有一行，耗性能弊大于利
TraceKit.remoteFetching = false;



export function extractErrorMeta(stackInfo, error) {
  function getType() {
    if (error && typeof error.reason !== 'undefined') {
      return 'unhandledrejection'
    }
    return 'error'
  }

  function getMessage() {
    if (!stackInfo) return '';
    return stackInfo.name ? `${stackInfo.name}: ${stackInfo.message}` : stackInfo.message;
  }

  function getStack() {
    if (error && typeof error === 'object') {
      return error.stack;
    }
    return error;
  }

  let lineno;
  let colno;
  let filename;
  if (stackInfo && stackInfo.stack && stackInfo.stack.length > 0) {
    const first = stackInfo.stack[0];
    lineno = first.line;
    colno = first.column;
    filename = first.url;
  }

  const errorMeta = {
    // unhandledrejection, rejectionhandled, error
    type: getType(),
    message: getMessage(),
    stack: getStack(),
    lineno,
    colno,
    filename,
  };
  return errorMeta;
}


/**
 * @description 上报脚本错误
*/
export function dispatchScriptError(error) {
  TraceKit.report(error);
}


export function subscribeScriptError(listener) {  
  TraceKit.report.subscribe(listener);
  return function unsubscribeScriptError() {
    TraceKit.report.unsubscribe(listener);
  }
}



