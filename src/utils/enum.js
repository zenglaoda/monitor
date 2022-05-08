/**
 * @description 根据字典生成列表
 * @param {Object.<string, string>} map
 * @param {string[]} keys
 * @returns {object[]}
*/
export function getList(map, keys) {
  if (Array.isArray(keys)) {
    return keys.map(key => map[key]);
  }

  return Object.keys(map)
    .map(key => map[key])
    .sort((x, y) => {
      return x.value - y.value;
    });
};

/**
 * @description 根据枚举值映射名字 value => label
 * @param {Object.<string, string>} map
 * @param {string[]} keys
 * @returns {Object.<string, string>}
*/
export function getLabel(map, keys) {
  keys = Array.isArray(keys) ? keys : Object.keys(map);
  return keys.reduce((obj, key) => {
    const item = map[key];
    obj[item.value] = item.label;
    return obj;
  }, {});
}


