import {createLogger, createStore} from 'vuex'

export const store = createStore({
  plugins: [createLogger()],
  state() {
    return {
      taskList: [
        { uuid: 0,  title: '1', date: '0003-12-01', description: '3', status: 'active' },
        { uuid: 1,  title: '111', date: '0003-12-01', description: '311', status: 'done' },
        { uuid: 2,  title: '1111', date: '0003-12-01', description: '3111', status: 'cancelled' },
        { uuid: 3,  title: '1111', date: '0003-12-01', description: '31111', status: 'pending' },
      ]
    }
  },
  mutations: {
    addTask(state, payload) {
      state.taskList.push(payload)
    },
    setStatusTask(state, payload) {
      state.taskList = state.taskList.concat(
      state.taskList.filter(item => {
        if (item.uuid == payload.uuid) item.status = payload.status
      }))
    }
  },
  getters: {
    getCountActive(state) {
      return state.taskList.reduce((acc, item) => {
        if (item.status === 'active') acc++
        return acc
      }, 0)
    },
    getTaskList(state) {
      return state.taskList
    },
    getTask(state) {
      return (uuid) => state.taskList.filter(item => item.uuid == uuid)[0];
    }
  }
})