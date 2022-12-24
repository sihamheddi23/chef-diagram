import { createStore } from 'vuex'
import { graphLevel } from "../helperFunctions/index";
 



// Create a new store instance.
export const  store = createStore({
  state () {
    return {
        type:-1,
        tasks:[],
        
    }
  },
  mutations: {
     addTask(state,paylod){
        const id =  state.tasks.length
        state.tasks.push({id:id,...paylod})
     },
    async run(state,payload){
      let y = [...state.tasks]
      console.log(y);
      console.log(await graphLevel(y));
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