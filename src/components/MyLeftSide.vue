<template>
  <div class="left">
     <div class="ii">
        <img src="../assets/icon.png" class="img"/>
        <div class="task ml-auto mr-3">
          <button class="btn btn-dark mt-3 " data-toggle="modal" data-target="#exampleModal">
            Ajouter une tache
          </button>
        </div>
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">ajouter une tache</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
                <div class="form-group">
                  <label for="nom">Nom :</label>
                  <input type="text" class="form-control" id="nom" v-model="payload.nom" placeholder="Entrer le nom du tache">
                </div>
                <div class="form-group">
                  <label for="anteriorete"  id="anteriorete" >Antériorité :</label>
                  <select  class="form-control"  v-model="payload.anteriorete" multiple>
                    <option value="-">-</option>
                 
                    <option  v-for="n in tasks" :key="n.id" :value="n.nom">{{n.nom}}</option>
                
                  </select>
                </div>
               <div class="form-group">
                  <label for="d">durée :</label>
                  <input type="number"  v-model="payload.duree" class="form-control" id="d"  placeholder="la durée">
                </div>
                <!-- <div class="form-group">
                  <label for="d">nombre de ressources :</label>
                  <input type="number" class="form-control" id="d" v-model="payload.nbr" placeholder="nombre">
                </div> -->

             <button type="button" class="btn btn-purple container" @click="addTask">Submit</button>
           </form>
            </div>
          
        </div>
        </div>
  </div>
        <my-table-tasks/>
       <div class="type d-flex  mt-3 ">
           <h6>
             Type de diagramme
           </h6>
           <select class="form-control " v-model="type" >
              <option value="-1">
                choisissez un diagramme
              </option>
              <option value="0">
                 diagramme de pert
              </option>
                <option value="1">
                 diagramme de gantt
              </option>
           </select>
       </div>
       <button class="btn btn-purple mt-3 " @click="run">
          Run >>
       </button>
     </div>
     
  </div>
</template>

<script>
import MyTableTasks  from './MyTableTasks.vue'

export default {
    components : {MyTableTasks},
    methods:{

      addTask(){
        const p = {...this.payload}
        this.$store.commit('addTask',p)
        this.payload.nom = ""
         this.payload.duree =1
        this.payload.nbr =0
      },
      run(){
        console.log("run");
         this.$store.commit('changeType',this.type)
      }

    },
    computed:{
      
      tasks(){
      
         return this.$store.state.tasks
      
      }
    },
    data(){
      return{
          type:this.$store.state.type,
          payload:{
            nom:"",
            anteriorete:[],
            duree:1,
            nbr:0,
           
          },
          
      }
    }
   
}
</script>

<style>
   
   .btn-purple {
     color: white;
     background-color: rgb(80, 26, 131);
     
     margin-left: auto;
     margin-right: 1rem;
   }
   .type {
    width: 80%;
   }

  .type h6 {
     width: 50%;
     margin-top: .4rem;
  }

  .left {
    width: 100%;
   
  }
  .task {
 

    margin-bottom: 1rem;
  }
  .task h6{
    margin-top: .5rem;
   text-align: center;
  }
  .ii {
   
   display: flex;
   flex-direction: column;
   align-items: center;
  }
  .img {
     margin-top: .4rem ;
     margin-bottom: 0.4rem ;

    width: 4rem;
    height: 4rem;
  }
</style>