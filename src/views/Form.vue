<template>
    <div>
        <h1>フォーム画面</h1>
        <div class="form">
            <h3>タスク名</h3>
            <input type="text" placeholder="タスク名" v-model="name">
            <h3>期限</h3>
            <input type="date" v-model="end">
            <h3>難易度</h3>
            <input type="number" v-model="difficulty">
            <h3>コンディション</h3>
            <p>ここのInputタグどうするん</p>
            <button @click="onsubmit">送信</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: function () {
          return {
              name: '',
              end: '',
              difficulty: '',
              conditions: [],
          };
        },
        methods: {
            onsubmit: function () {
                this.$store.commit('addTask', {
                    name: this.name,
                    end: this.end,
                    difficulty: this.difficulty,
                    conditions: this.conditions,
                });
                this.name = '';
                this.end = '';
                this.difficulty = '';
                this.conditions = [];
            },
        }
    }
</script>

<style scoped>

</style>