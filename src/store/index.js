import Vue from 'vue'
import Vuex from 'vuex'
import moduleLog from './log'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: { 'm_log': moduleLog },
    getters: { log: state => state.m_log.log }
})
export default store
