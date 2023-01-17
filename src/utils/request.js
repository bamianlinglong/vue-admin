import axios from "axios"
import { API_URL } from './config'

const mode = import.meta.env.MODE

const http = axios.create({
    baseURL: API_URL[mode],
    timeout: 5000
})

http.interceptors.request.use(config => {
    console.log('config', config)
    config.headers['Content-Type'] = config.json ? 'application/json;chartset=utf-8' : 'application/x-www-form-urlencoded;chartset=utf-8;'
}, err => {
    console.log('err', err)
})

export const request = (url, method, data, options = {}) => {
    http.request({
        method,
        url,
        data,
        ...options
    })
}