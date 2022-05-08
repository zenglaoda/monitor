/**
 * @description mock 请求拦截
 * @param {Axios} axios
 * @param {Object<string, function>} mockTemplates
 * @returns {function} 取消拦截
*/
export default function installMockInterceptor(axios, mockTemplates) {
  function mockInterceptor(config) {
    const plugins = config.plugins || {};
    const mock = plugins.mock;
    const template = mockTemplates[mock];

    if (template) {
      config.adapter = function adapter(config) {
        return Promise.resolve(template(config))
          .then((data) => {
            return {
              data,
              config
            };
          });
      }
    }
    return config;
  }
  
  const id = axios.interceptors.request.use(mockInterceptor);
  return function uninstall() {
    axios.interceptors.request.eject(id);
  }
}
