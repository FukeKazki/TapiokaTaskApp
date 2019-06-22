<template>
    <div>
        <h1>This is TaskTable page</h1>
        <ul>
            <li v-for="task in ActiveTask" :key="task.id">
                <label :for="task.name">{{ task.name }}</label>
                <input type="checkbox" :id="task.name" :value="task.id" v-model="checkedId">
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
        computed: {
            ActiveTask: function() {
                let newArray = [];
                this.$store.state.task.forEach((el) => {
                    // console.log(el);
                    if(el.isActive) { newArray.push(el); }
                    return true;
                });
                return newArray;
            },
        },
        methods: {
            test: function(){
                console.log(this.checkedId);
            },
            delete: function() {

            },
        }
    }
</script>

<style scoped>
li {list-style: none;}
</style>