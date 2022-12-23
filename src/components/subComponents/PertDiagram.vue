<template>
   
   
     <div class="diagram">
   
    <div id="cy"></div>


     </div>
   
   
     <div class="info mx-4 mt-3">
        <div class="d-flex justify-content-center pt-4">
       
           <h6 class="text-danger mr-3">Le chemin critique est : ---------</h6>
           <h6>La durée de projet : </h6>
        </div>
        <table class="table mx-3 mt-3">

                <tbody>
                    <tr>
                    <th scope="row">Marge libre</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">Marge totale
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                   <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>

                </tbody>
</table>
     </div>
</template>

<script>

import cytoscape from "cytoscape";

export default {
    
 data(){
    return {
      tasks:this.$store.state.tasks
    }
 },
mounted(){
      let elements = []
      this.tasks.forEach(e=>{
        elements.push({
          data:{id:e.nom,label:e.nom+" \n\n  DTO : [0,20] \n DTA : [0,20]"}
        })
        if(e.anteriorete.indexOf("-")==-1)
            e.anteriorete.forEach(a=>{
               elements.push({
                   data:{  
                      id: a+e.nom,
                      source: a,
                      target:e.nom
                    }
                })
            })
      })
     let cy = cytoscape({
        container: document.getElementById('cy'),
        elements: elements,
    style: [
        {
            selector: 'node',
            style: {
                shape: 'rectangle',
                'background-color': 'purple',
            label: 'data(label)',
            "text-valign" : "center",
            "text-wrap" : "wrap",
            width:"67rem",
            height:"63rem",
            "font-size":"10rem",
            color:"white"
            }
        },

         {
             
            selector: 'edge',
            style: {
                "target-arrow-shape": "triangle",
             "curve-style": "bezier",
            }
        }
        
        ]  
      });
      cy.layout({
         name: 'grid'
        }).run();
}
}
</script>

<style>
    #cy {
        width: 100%;
        height: 100%;
      
    }

.diagram {
    width: 100%;
    height: 60vh;
    border: 1px solid grey;

}

.info {
    background: white;
      height: 28vh;
       overflow-y:hidden;
      overflow-x: scroll;
}
</style>