<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <input id="description" v-model="description">
    </div>

    <button
        class="btn primary"
        :disabled="!isDisable"
        @click.prevent="addTask"
    >Создать</button>

  </form>
</template>

<script>

import {computed, reactive, toRefs} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "New",
  setup() {

    const store = useStore()

    const router = useRouter();

    const form = reactive(
        {
          uuid: +Date.now().toString(),
          title: null,
          date: null,
          description: null,
          status: 'active'
        }
    )

    const isDisable = computed(
        () => form.description !== null &&
            form.title !== null &&
            form.date !== null
    )

    function addTask() {
      store.commit('addTask', {...form})
      router.push('/tasks')

    }

    return {
      addTask,
      isDisable,
      ...toRefs(form),
    }
  }
}
</script>