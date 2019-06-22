<template>
    <div>
        <h1>タスクソート画面</h1>
        <h3>ソートボタン</h3>
        <button @click="sort1">ソート1</button>
        <button @click="sort2">ソート2</button>
        <div class="sort-result">
            <h3>ソート結果</h3>
            <ul>
                <li v-for="task in sortResult" :key="task.id">
                    <p>タスク名: {{ task.name }}</p>
                    <p>期限: {{ task.end }}</p>
                    <p>難易度: {{ task.difficulty }}</p>
                    <p>コンディション: {{ task.conditions }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskSort",
        data: function () {
            return {
                sortResult: [],
            };
        },
        methods: {
            sort1: function () {

            },
            sort2: function () {

            },
        }
    }
</script>

<style scoped>

</style>