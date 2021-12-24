/**本地存储 */

//获取本地存储
export const getItem = name => {
    const data = window.localStorage.getItem(name)
    // 为什么把 JSON.parse 放到 try-catch 中？
    // 因为 data 可能不是 JSON 格式字符串
    try {
        // 尝试把 data 转为 JavaScript 对象
        return JSON.parse(data)
    } catch (err) {
        // data 不是 JSON 格式字符串，直接原样返回
        return data
    }
}

//设置本地存储
export const setItem = (name, value) => {
    // 如果 value 是对象，就把 value 转为 JSON 格式字符串再存储
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value)

}

//删除
export const moveItem = name => {
    window.localStorage.removeItem(name)
}