<template>
 <div class="mx-1 w-100 t">
        <table class=" table-striped table  ">
            <thead class="thead-purple ">
              <tr >
                <th scope="col" width="17%">Nom de tache</th>
                <th scope="col" width="37%">Antériorité</th>
                <th scope="col" width="17%">Durée</th>
                <!-- <th scope="col" width="25%">Nombre ressources</th> -->
                <th scope="col"  width="17%" >action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tasks.length===0">
                <td colspan="5" class="text-center ">Insérer des taches pour remplir ce tableau</td>
              </tr>
        
             <tr v-for="n in tasks" :key="n.id">
                <td>{{n.nom}}</td>
                <td>
                   {{n.anteriorete}}
                </td>
                <td>{{n.duree}}</td>
                <!-- <td>{{n.nbr}}</td> -->
                <td>
                  <button class="btn btn-danger" @click="deleteTask(n.id)"> <i class="bi bi-trash3"></i> </button>
                </td>
              </tr>
   
      
            
         
        
        
            </tbody>
        </table>
 </div>

</template>

<script>
export default {
  computed:{
    tasks(){
      return this.$store.state.tasks
    }
  },
  methods:{
    deleteTask(id){
        console.log("delete task");
        this.$store.commit('deleteTask',id)
    }
  }
}
</script>

<style scoped>

.thead-purple{
  background-color: rgb(78, 29, 124);
  color: white;
  
}
.table-secondary {
  background-color: rgb(216, 213, 213) !important;
}
 
.table {
  display: block;
  max-width: 94%;
  margin: 0 1.5rem;
 height:17rem !important;
  overflow-y: scroll !important;
 
}

</style>