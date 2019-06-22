<template>
    <div>
        <h1>フォーム画面</h1>
        <div class="form">
            <h3>*タスク名</h3>
            <input type="text" placeholder="タスク名" v-model="name">
            <h3>*期限</h3>
            <input type="date" v-model="dedLine">
            <h3>*必要な時間</h3>
            <input type="number" v-model="usingTime">分
            <h3>期間</h3>
            <span>開始</span><input type="time" v-model="start">
            <span>終了</span><input type="time" v-model="end">
            <h3>場所</h3>
            <input type="text" v-model="place">
            <div>
                <h3>*Feeling</h3>
                <select name="" id="" v-model="feeling">
                    <option value="Good" selected>Good</option>
                    <option value="Bad">Bad</option>
                </select>
            </div>
            <button @click="onsubmit" class="submit-button">送信</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: function () {
          return {
              name: '',
              dedLine: '',
              difficulty: 0,
              usingTime: 0,
              times: [],
              place: [],
              feeling: 'Good',
              start: '',
              end: '',
          };
        },
        methods: {
            onsubmit: function () {
                this.times = [{start: this.start, end: this.end}];
                // difficultyの処理
                if(this.times !== []) {
                    this.difficulty++;
                }
                if(this.place !== []) {
                    this.difficulty++;
                }
                if(this.feeling === 'Bad') {
                    this.difficulty++;
                }
                // console.log('名前:' + this.name + ' 期限: ' + this.dedLine + ' difficulty: ' + this.difficulty + ' usingTime: ' + this.usingTime);
                // console.log('times:' + this.times + ' place: ' + this.place + ' feeling: ' + this.feeling);
                // console.table(this.times);
                // console.table(this.place);
                this.$store.commit('addTask', {
                    name: this.name,
                    dedLine: this.dedLine,
                    difficulty: this.difficulty,
                    usingTime: this.usingTime,
                    times: this.times,
                    place: this.place,
                    feeling: this.feeling,
                });
                this.name = '';
                this.dedLine = '';
                this.difficulty = 0;
                this.usingTime = 0;
                this.times = [];
                this.place = [];
                this.feeling = 'Good';
                this.start = '';
                this.end = '';
            },
        }
    }
</script>

<style scoped>
.submit-button {
    padding: .5em 1em;
    color: #FFF;
    background: #03A9F4;/*色*/
    border: solid 1px #0f9ada;/*線色*/
    border-radius: 4px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
    text-shadow: 0 1px 0 rgba(0,0,0,0.2);
}
</style>