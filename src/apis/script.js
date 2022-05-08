import { axios } from '../utils/axios';

export const getScriptList = (params) => {
  return axios({
    method: 'get',
    url: '/script/getList',
    params,
    plugins: {
      mock: '/script/getList'
    }
  })
};