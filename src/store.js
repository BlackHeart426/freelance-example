import {createLogger, createStore} from 'vuex'

export const store = createStore({
  plugins: [createLogger()],
  state() {
    return {
      taskList: [
        { uuid: 0,  title: '1', date: '', description: '3', status: 'active' },
        { uuid: 1,  title: '111', date: '', description: '311', status: 'done' },
        { uuid: 2,  title: '1111', date: '', description: '3111', status: 'cancelled' },
        { uuid: 3,  title: '1111', date: '', description: '31111', status: 'pending' },
      ]
    }
  },
  mutations: {
    addTask(state, payload) {
      state.taskList.push(payload)
    }
  },
  getters: {
    getTaskList(state) {
      return state.taskList
    },
    getTask(state) {
      return (uuid) => state.taskList.filter(item => item.uuid == uuid)[0];
    }
  }
})