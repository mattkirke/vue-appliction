<template>
  <HelloWorld/>
  <TaskList/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TaskList from './components/TaskList.vue'
export default {
  name: 'App',
    components: {
      HelloWorld,
      TaskList
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;

}
</style>
