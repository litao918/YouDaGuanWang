<template>
  <div class="hello">

      <Mindex v-if="determine"></Mindex>

      <Pindex v-else></Pindex>

  </div>
</template>

<script>
import Mindex from '../components/mobiles/mindex.vue';
import Pindex from '../components/pcweb/pindex.vue';

export default {
  components: { Mindex,Pindex },
  data() {
 
    return {
        determine:true,
    };
  },
  created(){
    if(window.screen.width <= 768){
      this.determine = true
    }else{
      this.determine = false
    }
   
    
  },
  mounted() {
    
  
  },
  
    
  
};


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>


