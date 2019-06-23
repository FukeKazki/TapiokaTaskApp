<template>
    <div id="app">


        <div id="nav" class="box17">
            <router-link to="/">Home</router-link>
            |
            <!--      <router-link to="/about">About</router-link> |-->
            <router-link to="/form">Form</router-link>
            |
            <router-link to="/task-sort">TaskSort</router-link>
            |
            <router-link to="task-table">TaskTable</router-link>
        </div>

        <transition name="page">
            <router-view/>
        </transition>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: url('./assets/watermark.jpg');
        height: 100%;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .box17{
    margin:2em 0;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    font-size: 20px;
}
.box17:before, .box17:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
}
.box17:before {left: 10px;}
.box17:after {right: 10px;}
.box17 p {
    margin: 0;
    padding: 0;
}
    .page-enter-active, .page-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>
