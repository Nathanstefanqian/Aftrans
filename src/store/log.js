export default {
    namespaced: true,
    state: {
        log: localStorage.getItem('log') ? JSON.parse(localStorage.getItem('log')) : []
    },
    mutations: {
        saveToStorage(state) {
            localStorage.setItem('log', JSON.stringify(state.log))
        },
        deleteItem(state, i) {
            state.log.splice(i, 1)
            this.saveToStorage()
        },
        addItem(state, data) {
            state.log = [...state.log, data]
            this.saveToStorage()
        }
    }
}
