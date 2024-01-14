<template>
  <div class="hello">
    <a href="https://github.com/mattkirke" target="_blank" rel="noopener" class="button-link">Do Not Click Me Under Any Circumstances :) </a>
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
