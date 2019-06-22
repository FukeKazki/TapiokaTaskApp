<template>
  <div class="home">
    <h1>トップページ</h1>
    <ul>
      <li v-for="task in $store.state.task" :key="task.id">
        <p>タスク名: {{ task.name }}</p>
        <p>期限: {{ task.end }}</p>
        <p>難易度: {{ task.difficulty }}</p>
        <p>コンディション: {{ task.conditions }}</p>
      </li>
    </ul>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    border: 1px solid #4d4d4d;
    margin-top: 1em;
  }
</style>