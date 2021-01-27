<template>
  <div class="card" >
    <h2>{{ title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button class="btn" @click.prevent="takeWork">Взять в работу</button>
      <button class="btn primary" @click.prevent="finished">Завершить</button>
      <button class="btn danger" @click.prevent="cancelled">Отменить</button>
    </div>
  </div>

</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRoute } from 'vue-router';
import {reactive, toRefs, watch, computed} from "vue";
import {useStore} from "vuex";

export default {
  components: {AppStatus},
  props: ['uuid'],
  setup() {
    const route = useRoute();
    const store = useStore()

    const uuid = route.params.uuid
    const taskData = store.getters.getTask(uuid)

    let form = reactive(
        {
          uuid: route.params.uuid,
          title: taskData?.title,
          date: taskData?.date,
          description:taskData?.description,
          status: taskData?.status,
        }
    )

    watch(taskData, () => {
        form.status = taskData?.status
    })

    function takeWork() {
      store.commit('setStatusTask', {uuid, status: 'active'})
    }

    function finished() {
      store.commit('setStatusTask', {uuid, status: 'done'})
    }

    function cancelled() {
      store.commit('setStatusTask', {uuid, status: 'cancelled'})
    }

    return {
      ...toRefs(form),
      cancelled,
      finished,
      takeWork
    }
  }
}
</script>

<style scoped>

</style>