import axios from 'axios'
import Vue from 'vue'
import Auth from '../store/auth'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://cytonnmall.ml'

export function post(url, data) {
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    })
}

export function get(url, params) {
    return axios({
        method: 'GET',
        url: url,
        params: params
    })
}

export function byMethod(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    })
}