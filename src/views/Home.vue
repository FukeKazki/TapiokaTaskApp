<template>

  <div class="home">

<!--    <center>-->
     <div class='box'>
       <div class='wave -one'></div>
       <div class='wave -two'></div>
  
        <ul>
          <li v-for="task in $store.state.task" :key="task.id"  class="tapioka">
            <div>{{ task.name }}</div>
<!--            <div >期限: {{ task.end }}</div>-->
<!--            <div >難易度: {{ task.difficulty }}</div>-->
<!--            <div >コンディション: {{ task.conditions }}</div>-->
          </li>
        </ul>


      <div class='wave -three'></div>

    </div>
<!--    </center>-->

<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}

</script>


<style scoped>
  li {
    list-style: none;
    border: 1px solid #4d4d4d;
    margin-top: 1em;
     border-radius: 50%;
     width: 200px;
     height: 200px;
  }

li {
    display: inline-block;
    margin: 20px;
}

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
    width: 200px;
    height: 200px;
    line-height: 200px;
    border-radius: 200px;
    background: #444;
    color: #fff;
    -webkit-animation: vertical 1s ease-in-out infinite alternate;
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
    0% { -webkit-transform:translateX( -3px); }
  100% { -webkit-transform:translateX(  0px); }
}

@-webkit-keyframes horizontal2 {
    0% { -webkit-transform:translateX(  3px); }
  100% { -webkit-transform:translateX(  0px); }
}

@-webkit-keyframes vertical {
    0% { -webkit-transform:translateY(-10px); }
  100% { -webkit-transform:translateY(  0px); }
}




html, body {
  height: 100%;
}

html {
  background: #eee;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 400px;
  /*height: 800px;*/
  border-radius: 5px;
  /*box-shadow: 0 2px 30px rgba(black, .2);*/
  /*background: lighten(#f0f4c3, 10%);*/
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
}

.wave.-three {
  animation: drift 5000ms infinite linear;
}

.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: .1;
  background: yellow;
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
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}


</style>