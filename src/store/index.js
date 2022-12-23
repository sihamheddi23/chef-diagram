import { createStore } from 'vuex'

 


function graphLevel(tasks){
   
  let ans = true
  let sansPred = []
  let t = []
  let level = 0
  let pos = -1
  while(ans){
     t = tasks.filter(ts=>ts.ordered==false)

     if(t.length ==0){
        ans = false 
     }
     else{
       
      sansPred = tasks.filter(ts=> ts.anteriorete.indexOf("-")>0).map(ts=> ts.id)
      
      tasks.forEach(ts => {
        // change level of sanpred task
        if (sansPred.indexOf(ts.id)>0) {
          ts.ordered=true
          ts.level =level
        }else{
          
          // remove sanPred task from list of anteriorete tasks
          for (let i = 0; i < sansPred.length; i++) {
            pos = ts.anteriorete.indexOf(sansPred[i])
            if(pos>0) ts.anteriorete.splice(pos,1)
            
          }
        
          if (ts.anteriorete.length == 0) {
            ts.anteriorete.push("-")
          }


        } 
     });

     level+=1
     }
  }
  return tasks

}



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
     run(state,payload){
      state.tasks = graphLevel(state.tasks)
       state.type = payload
       
     },
     deleteTask(state,id){
        console.log("delete task 3");
       let t =   state.tasks.filter(e=>e.id!==id)
       state.tasks = t 
     }
  }
})