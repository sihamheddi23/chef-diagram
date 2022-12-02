import { createStore } from 'vuex'

// Create a new store instance.
export const  store = createStore({
  state () {
    return {
        type:-1,
        tasks:[]
    }
  },
  mutations: {
     addTask(state,paylod){
        const id =  state.tasks.length
        state.tasks.push({id:id,...paylod})
     },
     changeType(state,payload){
       state.type = payload
     },
     deleteTask(state,id){
        console.log("delete task 3");
       let t =   state.tasks.filter(e=>e.id!==id)
       state.tasks = t 
     }
  }
})