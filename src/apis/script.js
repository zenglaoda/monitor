import { axios } from '@/utils/axios';

export const getScriptList = (params) => {
  return axios({
    url: '/script/getList',
    params,
    plugins: {
      mock: '/script/getList'
    }
  })
};

export const updateScript = (data) => {
  return axios({
    url: '/script/update',
    method: 'post',
    data,
    plugins: {
      mock: '/script/update'
    }
  });
}