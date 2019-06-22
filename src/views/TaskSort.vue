<template>
    <div>

        <h1>現在の</h1>
        <div>
            <h3>場所</h3>
            <input type="text" placeholder="場所" v-model="place">
            <h3>気分</h3>
            <select name="" id="" v-model="feeling">
                <option value="Good" selected>Good</option>
                <option value="Bad">Bad</option>
            </select>
            <h3>暇な時間</h3>
            <input type="number" v-model="freeTime">分
            <button @click="onsubmit">送信</button>
        </div>

        <h1>タスクソート画面</h1>
        <h3>ソートボタン</h3>
        <button @click="sort1">ソートボタン(仮)</button>

        <div class="sort-result">
            <h3>ソート結果</h3>
            <ul>
                <li v-for="task in $store.state.task" :key="task.id">
                    <p>タスク名: {{ task.name }}</p>
<!--                    <p>期限: {{ task.dedLine }}</p>-->
<!--                    <p>必要な時間: {{ task.usingTime }}</p>-->
<!--                    <p>場所: {{ task.place }}</p>-->
<!--                    <p>気分: {{ task.feeling }}</p>-->
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
                place: '',
                feeling: 'Good',
                freeTime: '',
            };
        },
        methods: {
            onsubmit() {
                this.$store.commit('nowFeeling', {
                    place: this.place,
                    feeling: this.feeling,
                    freeTime: this.freeTime,
                });
                this.place = '';
                this.feeling = '';
                this.freeTime = '';
            },
        },
    }
</script>

<style scoped>
    li {list-style: none;}
</style>