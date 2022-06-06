import Axios from 'axios';
import { 
  REQUEST_TIMEOUT, 
  REQUEST_BASE_URL 
} from '@/config/request';
import { 
  isAxiosError, 
  isAxiosAbort, 
  isAxiosTimeout,
  installMockInterceptor,
} from '@/lib/axios-plugins';
import { Notify, Message } from './message';

// enabled in the development env
import mockTemplates from '@/mock';


export const axios = Axios.create({
  timeout: REQUEST_TIMEOUT,
  baseURL: REQUEST_BASE_URL
});


function interceptResponseSuccess(response) {
  const { code, message, data } = response.data;

  if (message) {
    Message(message);
  }
  if (String(code) === '200') {
    return data;
  }
  return Promise.reject(response);
}

function interceptResponseFail(error) {
  return new Promise((_, reject) => {
    if (isAxiosAbort(error)) {
      reject(error);
      return;
    }

    if (isAxiosTimeout(error)) {
      Notify({
        title: '请求提示',
        message: '请求超时!'
      });
      reject(error);
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      if (isAxiosError(error)) {
        Notify({
          title: '请求提示',
          message: error.toJSON().message
        });
        reject(error);
        return;
      }
    }

    Notify({
      title: '请求提示',
      message: '请求错误!'
    });
    reject(error);
  });
}


if (process.env.NODE_ENV === 'development') {
  installMockInterceptor(axios, mockTemplates);
}

axios.interceptors.response.use(interceptResponseSuccess, interceptResponseFail);


