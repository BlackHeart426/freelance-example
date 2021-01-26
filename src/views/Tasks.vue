<template>
  <div  v-if="taskList.length === 0" class="card">
    <h1 class="text-white center">Задач пока нет</h1>
  </div>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="task of taskList" :key="task.uuid">
      <h2 class="card-title">
        {{ task.title }}
      </h2>
      <AppStatus :type="task.status" />
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task/'+ task.uuid)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore()

    console.log(store.getters.getTaskList)

    return {
     taskList: store.getters.getTaskList
    }
  },
  components: {AppStatus}
}
</script>
