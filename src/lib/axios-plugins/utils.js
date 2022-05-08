import Axios from 'axios';


export function isAxiosError(error) {
  return Axios.isAxiosError(error);
}

export function isAxiosAbort(error) {
  return isAxiosError(error) && error.code === 'ECONNABORTED';
}

export function isAxiosTimeout(error) {
  return isAxiosError(error) && (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED');
}