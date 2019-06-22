<template>
    <div>
        <div class="form">
            <h3>*タスク名</h3>
            <input type="text" placeholder="タスク名" v-model="name" class="box25">


            <h3>*期限</h3>
            <input type="date" v-model="dedLine" class="box25">


            <h3>*必要な時間</h3>
            <input type="number" v-model="usingTime" class="box25">分


            <h3>期間</h3>
            <span>開始</span><input type="time" v-model="start" class="box5">
            <span>終了</span><input type="time" v-model="end" class="box5">


            <h3>場所</h3>
            <input type="text" v-model="place" class="box6">


            <div>
                <h3>*Feeling</h3>
                <select name="" id="" v-model="feeling"  class="box15">
                    <option value="Good" selected>Good</option>
                    <option value="Bad">Bad</option>
                </select>
            </div><br>
            <button @click="onsubmit" type="submit"><img src="../assets/icon3.png" width="70" height="70" class="rotate-anime"></button>
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



.box25{
    position: relative;
    background: #fff0cd;
    box-shadow: 0px 0px 0px 5px #fff0cd;
    border: dashed 2px white;
    padding: 0.2em  0.5em;
    color: #454545;
        font-size: 25px;
}
.box25:after{
    position: absolute;
    content: '';
    right: -7px;
    top: -7px;
    border-width: 0 15px 15px 0;
    border-style: solid;
    border-color: #ffdb88 #fff #ffdb88;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15);
}
.box25 p {
    margin: 0; 
    padding: 0;
}
.box5 {
    padding: 0.5em 1em;
    margin: 2em 0.5;
    border: double 5px #4ec4d3;
    font-size: 25px;
}

.box17{
    margin:2em 0;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
}
.box6 {
    padding: 0.5em 0em;
    margin: 0em 0;
    background: #FDFFFE;
    border: dashed 6px #C1F9DD;/*点線*/
    font-size: 25px;
}
.box6 p {
    margin: 0; 
    padding: 0;
}

.box15 {
    padding: 0.2em 0.5em;
    margin: 0em 0;
    color: #565656;
    background: #ffeaea;
    box-shadow: 0px 0px 0px 10px #ffeaea;
    border: dashed 2px #ffc3c3;
    border-radius: 8px;
    font-size: 25px;
}
.box15 p {
    margin: 0; 
    padding: 0;
}


button {
  padding: 0;
  border: none;
  background: transparent;
}

button img {
  display: block;
}


.rotate-anime {
  animation: rotate-anime 3s linear infinite;
}
@keyframes rotate-anime {
  0%  {transform: rotate(0);}
  100%  {transform: rotate(360deg);}
}
</style>