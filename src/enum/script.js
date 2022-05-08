import { getList, getLabel } from '../utils/enum';

// 脚本错误状态
export const SCRIPT_STATUS = {
  RESOLVED: { label: '已解决', value: '1' },
  PENDING: { label: '待解决', value: '2' },
  DEALING: { label: '解决中', value: '3' },
  IGNORE: { label: '不予解决', value: '4' },
  REMAIN: { label: '暂不解决', value: '5' },
};
export const SCRIPT_STATUS_LIST = getList(SCRIPT_STATUS);
export const SCRIPT_STATUS_LABEL = getLabel(SCRIPT_STATUS);


// 脚本错误等级
export const SCRIPT_LEVEL = {
  SERIOUS: { label: '严重', value: '1' },
  MIDDLE: { label: '中等', value: '2' },
  SLIGHT: { label: '一般', value: '3' },
};
export const SCRIPT_LEVEL_LIST = getList(SCRIPT_LEVEL);
export const SCRIPT_LEVEL_LABEL = getLabel(SCRIPT_LEVEL);