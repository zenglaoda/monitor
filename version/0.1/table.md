## 通用类型声明
```javascript
interface UserAgent {
  // 设备: SM-A125U
  device: string, 
  // 操作系统 ios: 13.0 | Android 10.0
  os: string,
  //  navigator.userAgent
  ua: string,
}

interface ErrorMeta {
  type: "error" // unhandledrejection, rejectionhandled, error
  message: `Uncaught ReferenceError: b is not defined`,
  lineno: 15,
  colno: 13,
  filename: "http://localhost:3000/src/main.js",
  // js error
  error: {
    message: 'b is not defined',
    stack: 'ReferenceError: b is not defined \n at http://localhost:3000/src/main.js:15:13',
  },
  // promise error
  reason: {
    message: ''
    stack: ''
  }
}
```


## 项目表 tb_project
```javascript
interface Project {
  id: number,
  // 项目名
  name: string,
  // 创建时间戳
  createTime: string,
  // 修改时间戳
  updateTime: string,
}
```


## 脚本错误表 tb_script
```typescript
// 错误等级
enum ScriptErrorLevel {
  1: '严重',
  2: '中等',
  3: '一般'
};

// 错误状态
enum ScriptErrorStatus {
  1: '已解决'
  2: '待解决'
  3: '解决中'
  4: '不予解决'
  5: '暂不解决'
}

interface scriptError {
  id: number, 
  // 对应的版本号
  version: string,
  // 同源错误的唯一id: 文件名 + 行号 + 列号
  // sciprt error : 页面URL
  eventId: string,
  // 错误元信息
  errorMeta: ErrorMeta,
  // 默认一般
  level: ScriptErrorLevel, 
  // 默认待解决
  status: ScriptErrorStatus,
  // 环境
  userAgent: UserAgent,
  // 错误页面地址
  page: string,
  // 备注
  remark: string,
  createTime: string,
  updateTime: string,
}

```

## 埋点日志表 tb_trace
```javascript
interface tb_trace {
  id: number,
  // 描述
  description: string,
  // true: 使用中， false: 暂不启用
  enabled: boolean,
  // 创建时间戳
  createTime: string,
  // 修改时间戳
  updateTime: string,
}

interface tb_trace_log {
  id: number,
  // tb_trace.id
  traceId: number,
  // 埋点内容
  content: string,
  // navigator.useerAgent
  userAgent: UserAgent,
  // 创建时间戳
  createTime: string,
  // 修改时间戳
  updateTime: string,
}
```

## 请求表 tb_request
```javascript
export interface requestLogs {
    id: number,
    project: number,
    // 请求地址(完整地址)
    path: string,
    // 客户端发起时间
    startTime: string,
    // 客户端响应时间
    endTime: string,
    // 请求数据 (json 格式存储)
    request: string,
    // 响应数据 (json 格式存储)
    response: string,
    // 执行环境 { os: 操作系统， browser: 浏览器, location: { path: 路径, url: 完整地址 }, ua: string }
    context: string,
    // 额外数据 json 格式
    addition: string,
    // 创建时间戳
    createTime: string,
    // 修改时间戳
    updateTime: string,
}
```
