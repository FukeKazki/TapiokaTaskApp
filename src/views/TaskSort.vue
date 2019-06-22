<template>
    <div>

        <div>
            <h3>場所</h3>
            <input type="text" placeholder="場所" v-model="place" class="box">

            <h3>気分</h3>
            <select name="" id="" v-model="feeling" class="select">
                <option value="Good" selected>Good</option>
                <option value="Bad">Bad</option>
            </select>

            <h3>暇な時間</h3>
            <input type="number" v-model="freeTime" class="input">分

            <button type="submit" @click="onsubmit"><img src="../assets/icon2.png" width="50" height="50" class="bar" ></button>
        </div>


        <h3>ソートボタン</h3>

        <button type="submit" @click="onsort"><img src="../assets/icon1.png" width="70" height="70" class="rotate-anime"></button>



        <div class="sort-result">
            <h3>ソート結果</h3>

            <ul class="bar">
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
    import sort from '../algorithm';

    export default {
        name: "TaskSort",
        data: function () {
            return {
                place: '',
                feeling: 'Good',
                freeTime: '',
                sortedArray: [],
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
            onsort() {
                // console.log(this.$store.state.now);
                // console.log(this.$store.state.place);
                // console.log(this.$store.state.feeling);

                this.sortedArray = sort({time: this.$store.state.now, place: this.$store.state.place, feeling: this.$store.state.feeling}, this.$store.state.freeTime, this.$store.state.task);
                console.table(this.sortedArray);
            }
        },
    }
</script>

<style scoped>
    li {list-style: none;}

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


ul, ol {
  padding: 0;
  position: relative;
}

ul li, ol li {
  color: black;
  border-left: solid 8px orange;/*左側の線*/
  background: whitesmoke;/*背景色*/
  margin-bottom: 5px;/*下のバーとの余白*/
  line-height: 1.5;
  border-radius: 0 15px 15px 0;/*右側の角だけ丸く*/
  padding: 0.5em;
  list-style-type: none!important;
}

.bar{
  animation: bar_9955 3s linear infinite;
  transform-origin: 50% 50%;
  margin: 1rem 0 !important;
}
 
@keyframes bar_9955 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-10px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}

.box {
    padding: 0.2em 0.5em;
    margin: 0.5em 0;
    background: #d6ebff;
    box-shadow: 0px 0px 0px 10px #d6ebff;
    border: dashed 2px white;
     height:30px;
     width:150px;
     font-size: 30px;
}

.select {
    padding: 0.2em 0.5em;
    margin: 0.5em 0;
    background: #d6ebff;
    box-shadow: 0px 0px 0px 10px #d6ebff;
    border: dashed 2px white;
    height:40px;
    width:185px;
    font-size: 30px;
}
.input {
        padding: 0.2em 0.5em;
    margin: 0.5em 0;
    background: #d6ebff;
    box-shadow: 0px 0px 0px 10px #d6ebff;
    border: dashed 2px white;
    height:40px;
    width:50px;
    font-size: 40px;
}


</style>