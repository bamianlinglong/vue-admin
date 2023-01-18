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
    console.log('config', config)
    config.headers['Content-Type'] = config.json ? 'application/json;chartset=utf-8' : 'application/x-www-form-urlencoded;chartset=utf-8;'
    return config
}, err => {
    console.log('err', err)
    return err
    // return err
})

http.interceptors.response.use(response => {
    console.log('response',response)
    if (response.data.code === 0) {
        return response
    } else {
        if (response.data.code === 401) {
            console.log('未登录')
        } else if (response.data.code === 400) {
            message.error(response.data.msg);
        }
    }
    
})


export default http