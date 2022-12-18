<template>
  <div class="right">

     <PertDiagram v-if="type == 0 && isEmpty"/>
     <GanttDiagram v-else-if="type == 1 && isEmpty"/>
     <div v-else class="d-flex justify-content-center align-items-center h-50 text-secondary">
        <p>Ajouter des taches et indiquer le type de diagramme pour l'afficher ici</p>
     </div>

  </div>
</template>

<script>
import GanttDiagram from './subComponents/GanttDiagram.vue'
import PertDiagram from './subComponents/PertDiagram.vue'
export default {

  components: { PertDiagram, GanttDiagram },
 computed: {
    type(){
      return this.$store.state.type
    },
    isEmpty(){
      return this.$store.state.tasks.length>0
    }
 }
}
</script>

<style>
  .right {
    background-color: #ece1f1bd;
  }
</style>