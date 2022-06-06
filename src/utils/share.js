export function shallowCopy(data) {
  if (data === null || typeof data !== 'object') return data;

  const res = Array.isArray(data) ? [] : {};
  Object.keys(data).forEach(key => {
    res[key] = data[key];
  });
  return res;
}


export function isObject(o) {
  return Object.prototype.toString.call(o).toLowerCase().slice(8, -1) === 'object';
}