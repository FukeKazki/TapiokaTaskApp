<template>
    <div class="task-table">
        <ul class="bar">
            <li v-for="task in ActiveTask" :key="task.id">
                <label :for="task.name">{{ task.name }}</label>
                <input type="checkbox" :id="task.name" :value="task.id" v-model="checkedId">
            </li>
        </ul>
        <button type="submit" @click="deleteTask"><img src="../assets/icon4.png" width="60" height="70" class="rotate-anime"></button>

    </div>
</template>

<script>
    export default {
        name: "TaskTable",
        data: function () {
            return {
                checkedId: [],
            }
        },
        computed: {
            ActiveTask: function () {
                let newArray = [];
                this.$store.state.task.forEach((el) => {
                    // console.log(el);
                    if (el.isActive) {
                        newArray.push(el);
                    }
                    return true;
                });
                return newArray;
            },
        },
        methods: {
            test: function () {
                console.log(this.checkedId);
            },
            deleteTask: function () {
                this.$store.commit('deleteTask', {
                    id: this.checkedId,
                });
            },
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
    }

    .task-table {
        min-height: 100vh;
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
</style>