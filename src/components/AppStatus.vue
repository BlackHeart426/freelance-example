<template>
  <span class="badge primary" v-if="type == 'active'">Активен</span>
  <span class="badge danger"  v-if="type == 'cancelled'">Отменен</span>
  <span class="badge warning" v-if="type == 'pending'">Выполняется</span>
  <span class="badge primary" v-if="type == 'done'">Завершен</span>
</template>
<script>
export default {
  props: ['type']
}
</script>