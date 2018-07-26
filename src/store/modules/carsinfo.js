import { getCarInfo } from '../../../api'
import { stat } from 'fs';
const state = {

}
const getters = {

}
const actions = {
    getCarInfo({ commit }, page) {
        return getCarInfo(page)
    }
}
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}