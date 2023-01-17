import axios from "axios"
import { API_URL } from './config'

const mode = import.meta.env.MODE

const http = axios.create()
http.defaults.baseURL = API_URL[mode]
