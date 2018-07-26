import axios from 'axios'
import cfg from '../config'

axios.defaults.withCredentials = false;

const host = cfg.publicPath;

export default {
    get: (url, option, error) => {
        if (url.indexOf('https') > -1) { url = url } else {
            url = host + url
        }

        return axios.get(url, option).then(response => response.data)
            .catch(err => {
                if (error) {
                    error(err)
                } else {
                    console.log(err)
                }
            })
    },
    post: (url, data, option, error) => {
        axios.post(host + url, data, option)
            .then(response => response.data)
            .catch(err => {
                if (error) {
                    error(err)
                } else {
                    console.log(err)
                }
            })
    },
    delete: (url, option, error) => {
        axios.delete(host + url, option)
            .then(response => {
                response.data
            })
            .catch(err => {
                if (error) {
                    error(err)
                } else {
                    console.log(err)
                }
            })
    }
}