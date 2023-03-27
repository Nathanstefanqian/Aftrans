export default {
    namespaced: true,
    state: {
        log: localStorage.getItem('log') ? JSON.parse(localStorage.getItem('log')) : []
    },
    mutations: {
        saveToStorage(state) {
            console.log('存储成功!')
            localStorage.setItem('log', JSON.stringify(state.log))
        },
        deleteItem(state, i) {
            state.log.splice(i, 1)
            this.commit('m_log/saveToStorage')
        },
        addItem(state,data){
            state.log = [...state.log, data]
            this.commit('m_log/saveToStorage')
        }
    }
}
