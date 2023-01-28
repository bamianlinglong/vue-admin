import axios from "axios"
import { API_URL } from './config'
import { message } from "ant-design-vue"
import 'ant-design-vue/es/message/style/css'

const mode = import.meta.env.MODE

const http = axios.create({
    baseURL: API_URL[mode],
    // timeout: 5000
})

http.interceptors.request.use(config => {
    config.headers['Content-Type'] = config.json ? 'application/json;chartset=utf-8' : 'application/x-www-form-urlencoded;chartset=utf-8;'
    return config
}, err => {
    return err
})

http.interceptors.response.use(response => {
    const { code, error, msg } = response.data 
    if (code === 0) {
        return Promise.resolve(response.data)
    } else {
        if (code === 401) {
            message.error('未登录，权限不足');
        } else if (code === 500) {
            const codemsg = error.errno === -4078 && '请检查数据库是否开启' || msg
            message.error(codemsg);
        } else {
            message.error(msg);
        }
        return Promise.reject(response.data)
    }
}, error => {
    console.log(error)
})


export default http