<template>

    <div class="home">
        <div class="left">
            <div class='box'>
                <div class='wave -one' :class="{fullcolor: isFull}"></div>
                <div class='wave -two' :class="{fullcolor: isFull}"></div>
                <ul>
                    <li v-for="task in TaskLessThan" :key="task.id" class="tapioka" @click="TaskClick($event)">
                        <div>{{ task.name }}</div>
                    </li>
                </ul>
                <div class='wave -three'></div>
            </div>
        </div>
        <div class="right">
            <div class='box'>
                <div class='wave -one' :class="{fullcolor: isFull}"></div>
                <div class='wave -two' :class="{fullcolor: isFull}"></div>
                <ul>
                    <li v-for="task in TaskMoreThan" :key="task.id" class="tapioka" @click="TaskClick($event)">
                        <div>{{ task.name }}</div>
                    </li>
                </ul>
                <div class='wave -three'></div>
            </div>
        </div>

        <div class="popup" v-if="isShow">
            <h2>{{ TaskName }}</h2>
            <p>期限: {{ TaskDedLine }}</p>
            <p>必要な時間: {{ TaskUsingTime }} 分</p>
            <p>場所: {{ TaskPlace !== [] ? TaskPlace[0] : '指定なし' }}</p>
            <p>タスクの印象: {{ TaskFeeling }}</p>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'home',
        data: function () {
            return {
                TaskName: '',
                TaskDedLine: '',
                TaskUsingTime: '',
                TaskPlace: '',
                TaskFeeling: '',
                isShow: false,
            };
        },
        computed: {
            TaskLessThan: function() {
              let newArray = [];
                this.$store.state.task.forEach(el => {
                   if(el.id <= 6) {
                       newArray.push(el);
                   }
                   return true;
                });
                return newArray;
            },
            TaskMoreThan: function() {
                let newArray = [];
                this.$store.state.task.forEach(el => {
                    if(el.id > 6) {
                        newArray.push(el);
                    }
                    return true;
                });
                return newArray;
            },
            isFull: function () {
                console.log(this.$store.state.task.length);
                return this.$store.state.task.length > 10;
            }
        },
        methods: {
            TaskClick (event) {
                console.log(event.target.outerText);
                this.$store.state.task.forEach(el => {
                    if(el.name === event.target.outerText) {
                        this.TaskName = el.name;
                        this.TaskDedLine = el.dedLine;
                        this.TaskUsingTime = el.usingTime;
                        this.TaskPlace = el.place;
                        this.TaskFeeling = el.feeling;
                    }
                });
                // console.log(this.TaskName);
                // console.log(this.TaskDedLine);
                // console.log(this.TaskUsingTime);
                // console.log(this.TaskPlace);
                // console.log(this.TaskFeeling);
                this.isShow = !this.isShow;
            },
        }
    }

</script>


<style scoped>
    li:nth-child(odd) {
        -webkit-animation: horizontal1 1s ease-in-out infinite alternate;
    }

    li:nth-child(even) {
        -webkit-animation: horizontal2 1s ease-in-out infinite alternate;
    }

    li {
        text-decoration: none;
        display: block;
        text-align: center;
        width: 150px;
        height: 150px;
        line-height: 150px;
        border-radius: 200px;
        background: #444;
        color: #fff;
        -webkit-animation: vertical 1s ease-in-out infinite alternate;
        margin: 20px auto 20px auto;
    }

    li:nth-child(1) a {
        -webkit-animation-duration: 1.1s;
    }

    li:nth-child(2) a {
        -webkit-animation-duration: 1.3s;
    }

    li:nth-child(3) a {
        -webkit-animation-duration: 1.5s;
    }


    @-webkit-keyframes horizontal1 {
        0% {
            -webkit-transform: translateX(-20px);
        }
        100% {
            -webkit-transform: translateX(0px);
        }
    }

    @-webkit-keyframes horizontal2 {
        0% {
            -webkit-transform: translateX(20px);
        }
        100% {
            -webkit-transform: translateX(0px);
        }
    }

    @-webkit-keyframes vertical {
        0% {
            -webkit-transform: translateY(-10px);
        }
        100% {
            -webkit-transform: translateY(0px);
        }
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home {
        display: flex;
        width: 1000px;
        margin: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .box {
        padding: 0 1em;
        width: 500px;
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
        margin: 0 auto;
    }

    .wave {
        opacity: .4;
        position: absolute;
        top: 3%;
        left: 50%;
        background: #FAEAC9;
        width: 500px;
        height: 600px;
        margin-left: -250px;
        margin-top: -250px;
        transform-origin: 50% 48%;
        border-radius: 43%;
        animation: drift 3000ms infinite linear;
        /*z-index: -99;*/
    }

    .wave.-three {
        animation: drift 5000ms infinite linear;
        /*z-index: -99;*/
    }

    .wave.-two {
        animation: drift 7000ms infinite linear;
        opacity: .1;
        background: yellow;
        /*z-index: -99;*/

    }
    .fullcolor {
        background: red;
        opacity: .4;
    }

    .box:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /*background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));*/
        z-index: 11;
        transform: translate3d(0, 0, 0);
    }


    @keyframes drift {
        from {
            transform: rotate(0deg);
        }
        from {
            transform: rotate(360deg);
        }
    }

    .left {
        border-right: 2px solid #4d4d4d;
        border-bottom: 2px solid #4d4d4d;
        border-left: 2px solid #4d4d4d;
        margin-right: 1em;
    }
    .right {
        border-right: 2px solid #4d4d4d;
        border-bottom: 2px solid #4d4d4d;
        border-left: 2px solid #4d4d4d;
    }
    .home {
        position: relative;
    }
    .popup {
        border: 1px solid #4d4d4d;
        background: #fff;
        position: absolute;
        width: 300px;
        height: 300px;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
</style>