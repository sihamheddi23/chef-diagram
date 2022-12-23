function graphLevel(tasks){
   
    let ans = true
    let sansPred = []
    let t = []
    let level = 0
    let pos = -1
    while(level<2){
     
       t = tasks.filter(ts=>ts.ordered==false)
  
       if(t.length ==0){
          ans = false 
       }
       else{
       
        sansPred = tasks.filter(ts=> ts.anteriorete.indexOf("-")>0).map(ts=> ts.id)
        
        tasks.forEach(ts => {
          // change level of sanpred task
          if (sansPred.indexOf(ts.id)>0) {
            console.log("hi I'm ",ts,"\n\n");
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
  
  let tasks = [
      
      {       id:"a",     
              nom:"a",
              anteriorete:["-"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
     {       id:"b",     
              nom:"b",
              anteriorete:["a"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"c",     
              nom:"c",
              anteriorete:["a"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"d" ,    
              nom:"d",
              anteriorete:["a","b"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"e",     
              nom:"e",
              anteriorete:["-"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"k" ,    
              nom:"k",
              anteriorete:["e"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"l",     
              nom:"l",
              anteriorete:["k"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      {       id:"m",     
              nom:"m",
              anteriorete:["l"],
              duree:1,
              nbr:0,
              dta:[],
              dto:[],
              ordered:false,
              level:0,
            
             
     },
      
  ]
  
  console.log(graphLevel(tasks))