function graphLevel(tasks){
 
    let ans = true,a=true
    let sansPred = []
    let t = []
    let level = 0
    let pos = -1
    let ant = []

    while(ans){
     
       t = tasks.filter(ts=>ts.ordered==false)
  
       if(t.length ==0){
          ans = false 
       }
       else{
       
            sansPred = t.filter(ts=> ts.anteriorete.indexOf("-")>=0).map(ts=> ts.id)
        
            tasks.forEach((ts,index) => {
              // change level of sanpred task
             
              if (sansPred.indexOf(ts.id)>=0) {
            
                ts.ordered=true
                ts.level =level
              
              
              }else{
                
                // remove sanPred task from list of anteriorete tasks
                for (let i = 0; i < sansPred.length; i++) {
                  pos = ts.anteriorete.indexOf(sansPred[i])
                  if(pos>=0) {
                    if(a)  {
                      ant.push({[index]:ts.anteriorete})
                      a=false
                    }
                    ts.anteriorete.splice(pos,1)
                  }
                  
                }
                a=true
              
                if (ts.anteriorete.length == 0) {
                  ts.anteriorete.push("-")
                }
      
      
              } 
          });
          console.log(ant);
      
          level+=1
       }
    }

    // tasks.forEach(ts => {
    //    tsk.forEach(task => {
        
    //         if(ts.id == task.id){
              
    //             ts.anteriorete = task.anteriorete

    //         }
      
    //   })
    // })


    
    console.log("hi I'm ",tasks);
    return tasks
  
  }
  
  let tasks = [
      
      {       id:"a",     
              nom:"a",
              anteriorete:["-"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
     {       id:"b",     
              nom:"b",
              anteriorete:["a"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"c",     
              nom:"c",
              anteriorete:["a"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"d" ,    
              nom:"d",
              anteriorete:["a","b"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"e",     
              nom:"e",
              anteriorete:["-"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"k" ,    
              nom:"k",
              anteriorete:["e"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"l",     
              nom:"l",
              anteriorete:["k"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"m",     
              nom:"m",
              anteriorete:["l"],
              duree:1,
                
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      
  ]
graphLevel(tasks)