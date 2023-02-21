import http from '@/utils/request'

export const getNavbar = (data) => {
    return http({
        url: '/navbar/navbarList',
        method: 'get',
        params: data
    })
}