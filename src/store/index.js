import Vue from 'vue'
import Vuex from 'vuex'
import moduleLog from './log'

Vue.use(Vuex)

const store = new Vuex.Store({ modules: { 'm_log': moduleLog } })
export default store
