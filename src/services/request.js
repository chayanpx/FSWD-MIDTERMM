import axios from 'axios'
import service from './setting'

const instance = axios.create({
    baseURL: service.BASE_URL
})

export default instance
