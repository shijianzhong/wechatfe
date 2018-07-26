import Vue from 'vue'
import Vuex from 'vuex'
import carsinfo from './modules/carsinfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        carsinfo
    }
})