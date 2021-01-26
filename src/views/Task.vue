<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRoute } from 'vue-router';
import {reactive, toRefs} from "vue";
import {useStore} from "vuex";

export default {
  components: {AppStatus},
  props: ['uuid'],
  setup() {
    const route = useRoute();
    const store = useStore()

    const uuid = route.params.uuid

    const taskData = store.getters.getTask(uuid)

    console.log(taskData)

    const form = reactive(
        {
          uuid: route.params.uuid,
          title: taskData.title,
          date: taskData.date,
          description:taskData.description,
          status: taskData.status,
        }
    )

    return {
      ...toRefs(form)
    }
  }
}
</script>

<style scoped>

</style>