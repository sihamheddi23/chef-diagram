import { createStore } from 'vuex'
import { cheminCritique, dateAuPlusTard, dateAuPlusTot, graphLevel, margeLibreEtTotale } from "../helperFunctions/index";
 



// Create a new store instance.
export const  store = createStore({
  state () {
    return {
        type:-1,
        tasks:[],
        duree:0,
        chemin:[]
        
    }
  },
  mutations: {
     addTask(state,paylod){
        const id =  state.tasks.length
        state.tasks.push({id:id,...paylod})
     },
     setDuree(state,duree){
         state.duree = duree
         dateAuPlusTard(  state.tasks, state.duree)
         state.chemin = cheminCritique(state.tasks)
         margeLibreEtTotale( state.tasks, state.duree)
     }
     ,
     run(state,payload){
      let y = [...state.tasks]
     
      graphLevel(y)
      dateAuPlusTot(y)
     
     // console.log( state.tasks);
       state.type = payload
       
     },
     deleteTask(state,id){
        console.log("delete task 3");
       let t =   state.tasks.filter(e=>e.id!==id)
       state.tasks = t 
     }
  }
})