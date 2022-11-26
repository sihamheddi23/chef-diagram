<template>
  <div class="left">
     <div class="ii">
        <img src="../assets/icon.png" class="img"/>
        <div class="d-flex text-left task">
            <h6>
                <b>nombre de tache de ce projet</b>
            </h6>
           <input type="number" class="form-control"   placeholder="nombre de tache">
        </div>
     
        <my-table-tasks/>
       <div class="type d-flex  mt-3 ">
           <h6>
             Type de diagramme
           </h6>
           <select class="form-control " >
              <option value="">
                 diagramme de pert
              </option>
                <option value="">
                 diagramme de gantt
              </option>
           </select>
       </div>
       <button class="btn btn-purple mt-3 ">
          Run >>
       </button>
     </div>
     
  </div>
</template>

<script>
import MyTableTasks  from './MyTableTasks.vue'

export default {
    components : {MyTableTasks}
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
    gap: 1rem;
    align-items: center;
    justify-content: center;
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