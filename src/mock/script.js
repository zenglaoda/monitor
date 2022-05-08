import Mock from "mockjs";

export const getScriptList = {
  data: {
    "rows|10": [
      {
        'id|+1': 1,
        'level|1': ['1', '2', '3'],
        'status|1': ['1', '2', '3', '4', '5'],
        'page': '@url',
        'remark': '@ctitle(20,50)',
        'createTime': '@datetime("T")',
        'updateTime': '@datetime("T")',
        'errorMeta': {
          message: `@title`,
          error: {
            message: `@title`,
            stack: '@title'
          }
        },
      }
    ],
    count: 100
  }
}