export interface projects {
    id: number,
    name: string,
    // 创建时间戳
    createTime: string,
    // 修改时间戳
    updateTime: string,
}

// 错误信息监控
export interface errorLogs {
    id: number,
    // 页面地址
    url: string,
    // 路径
    path: string,
    // 错误信息
    message: string,
    // 错误状态  0: 待修复 1: 已修复
    status: number,
    // 机器型号 json 格式
    machine: string
    // 错误类型 0: 脚本错误, 1:请求错误
    type: number,
    // 修复时间戳
    fixedTime: string,
    // 备注
    remark: string,
    // 修复人
    fixedBy: string,
    // 创建时间戳
    createTime: string,
    // 修改时间戳
    updateTime: string,
}

// 请求时间耗时
export interface requestLogs {
    id: number,
    // 请求地址(完整地址)
    url: string,
    // 请求路径
    path: string,
    // 客户端发起时间
    startTime: string,
    // 客户端响应时间
    endTime: string,
    // 请求数据 (json 格式存储)
    request: string,
    // 响应数据 (json 格式存储)
    response: string,
    // 创建时间戳
    createTime: string,
    // 修改时间戳
    updateTime: string,
}

// 页面访问统计
export interface pvLogs {
    id: number,
    // 访问地址(完整地址)
    url: string,
    // 访问路径
    path: string,
    // 访问开始时间戳
    startTime: string,
    // 访问结束时间戳
    endTime: string,
    // 创建时间戳
    createTime: string,
    // 修改时间戳
    updateTime: string,
}