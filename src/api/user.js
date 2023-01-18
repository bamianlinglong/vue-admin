import http from '@/utils/request'

export const login = (data) => {
    return http({
        url: '/user/login',
        method: 'get',
        params: data
    })
}