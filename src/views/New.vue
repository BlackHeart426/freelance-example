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

export default {
  name: "New",
  setup() {

    const form = reactive(
        {
          title: null,
          date: null,
          description: null
        }
    )

    const isDisable = computed(
        () => form.description !== null &&
            form.title !== null &&
            form.date !== null
    )

    function addTask() {
      console.log('name' + form.description)
      console.log('name' + form.title)
      console.log('name' + form.date)
    }

    return {
      addTask,
      isDisable,
      ...toRefs(form),
    }
  }
}
</script>