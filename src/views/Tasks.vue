<template>
  <div  v-if="taskList.length === 0" class="card">
    <h1 class="center">Задач пока нет</h1>
  </div>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ countActive }}</h3>
    <div class="card" v-for="task of taskList" :key="task.uuid">
      <h2 class="card-title">
        {{ task.title }}
      </h2>
      <AppStatus style="right: 0" :type="task.status" />
      <p>
        <strong>
          <small>
            {{ task.date }}
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

    const taskList = store.getters.getTaskList

    const countActive = store.getters.getCountActive


    console.log(store.getters.getCountActive)

    return {
      taskList,
      countActive
    }
  },
  components: {AppStatus}
}
</script>
