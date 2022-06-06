import { axios } from '@/utils/axios';

export const getScriptList = (params) => {
  return axios({
    url: '/script/getList',
    params,
  })
};

export const updateScript = (data) => {
  return axios({
    url: '/script/update',
    method: 'post',
    data,
  });
}

export const getItem = (params) => {
  return axios({
    url: '/script/getItem',
    method: 'get',
    params,
  });
}