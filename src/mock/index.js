import Mock from 'mockjs';
import { getScriptList } from './script';

function transferResponse(data) {
  return {
    code: 200,
    data: data.data,
    message: ''
  };
}

function render(template, transferData) {
  return function(config) {
    let data;
    if (typeof template === 'function') {
      data = template(config);
    } else {
      data = Mock.mock(template);
    }
    return Promise.resolve(data)
      .then(() => {
        if (typeof transferData === 'function') {
          return transferData(data);
        }
        return data;
      });
  }
}

export default {
  '/script/getList': render(getScriptList, transferResponse)
};