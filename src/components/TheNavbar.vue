<template>
  <header class="navbar">
    <router-link to="/"><strong>Freelance</strong></router-link>

    <ul class="navbar-menu">
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
      <li>
        <router-link to="/tasks">Все задачи</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
name: "TheNavbar"
}
</script>