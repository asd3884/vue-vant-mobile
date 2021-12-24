import request from '@/utils/request'

/**与用户模块相关的接口 */

export const login = (mobile, code) => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data: {
            mobile,
            code
        }

    })
}