import { request } from '@/utils/request'

export const login = (data) => {
    return request('/user/login', 'get', data)
}