<template>
    <div>
        <h1>This is TaskTable page</h1>
        <ul>
            <li v-for="task in $store.state.task" :key="task.id" v-if="task.isActive">
                <label :for="task.name">{{ task.name }}</label>
                <input type="checkbox" :id="task.name" :value="task.name" v-model="checkedId">
            </li>
        </ul>
        <button @click="test">test</button>
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
        methods: {
            test: function(){
                console.log(this.checkedId);
            }
        }
    }
</script>

<style scoped>
li {list-style: none;}
</style>