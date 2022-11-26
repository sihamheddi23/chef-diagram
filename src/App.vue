<template>
    
    
    <div class="grid">
      <my-left-side/>
      <my-right-side/>
    </div>

    <my-footer/>

</template>

<script>

import MyFooter from './components/MyFooter.vue'
import MyLeftSide from './components/MyLeftSide.vue'
import MyRightSide from './components/MyRightSide.vue'


export default {
  components: {MyFooter, MyLeftSide ,MyRightSide},

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 93vh;
}
</style>