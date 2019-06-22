<template>
    <div>
        <h1>This is TaskTable page</h1>
        <ul>
            <li v-for="task in $store.state.task" :key="task.id" v-if="task.isActive">
                <span>{{ task.name }}</span><input type="checkbox">
            </li>
        </ul>
<!--        <button @click="delete">削除</button>xz-->
    </div>
</template>

<script>
    export default {
        name: "TaskTable",
        data: function() {
          return {
              checkedId: [],
          }
        },
    }
</script>

<style scoped>
li {list-style: none;}
</style>