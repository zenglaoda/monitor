import { axios } from '@/utils/axios';

export const getProjectList = (params) => {
  return axios({
    url: '/project/getList',
    params,
  })
};
