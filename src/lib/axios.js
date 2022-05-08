import Axios from 'axios';
import { REQUEST_TIMEOUT } from '../config/request';


// 中断请求

// 超时重新发送: 可选配置，可配置超时时间，重试次数

// 数据缓存: 可选配置
/*
  1. 在一定时间内使用相同参数请求同一接口，返回缓存数据
  2. 清除缓存
*/

const axios = new Axios({
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: '请求超时!',
});

export function interceptResponseSuccess(response) {
  return response.data;
}

export function interceptResponseFail(error) {
  function handleAxiosError(axiosError) {
    // onabort
    if (axiosError.code === 'ECONNABORTED') {
      console.log(`请求中断: ${axiosError.message}`);
      return Promise.reject(axiosError);
    }

    // ontimeout
    if (axiosError.code === 'ETIMEDOUT' || axiosError.code === 'ECONNABORTED') {
      console.log(`请求超时: ${axiosError.message}`);
      return Promise.reject(axiosError);
    }

    // 请求有响应但请求状态码并非预期值
    if (axiosError.response) {
      if (String(axiosError.response.status) === 400) {
        // 请求参数错误
      }
      return Promise.reject(axiosError);
    }

    // 请求无响应或报错 404/500
    console.log(axiosError.toJSON());
    return Promise.reject(axiosError);
  }

  // axios 正常执行
  if (Axios.isAxiosError(error)) {
    return handleAxiosError(error);
  } else {
    // axios 请求之外抛出的错误，如代码错误，数据类型转换错误
    console.log(error);
  }

  return Promise.reject(error);
}


/**
 * @description get 请求
 * @param {string} url 
 * @returns {function}
 */
export function GET(url) {
  return function (params) {
    const config = {
      url,
      params
    };
    return axios(config);
  }
}

/**
 * @description post 请求
 * @param {string} url 
 * @returns {function}
 */
export function POST(url) {
  return function (data) {
    const config = {
      url,
      method: 'post',
      data
    };
    return axios(config);
  }
}

export function createRequest(config) {
  function request(config, body) {

  }

  request.cancel = function () {

  }

}

axios.intercepr.response.use(interceptResponseSuccess, interceptResponseFail);