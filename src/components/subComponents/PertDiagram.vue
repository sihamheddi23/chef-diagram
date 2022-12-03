<template>
   
   
     <div class="diagram">
   
    <div id="cy"></div>


     </div>
   
   
     <div class="info mx-4 mt-3">
        <h6 class="text-danger text-center pt-4">Le chemin critique est : ---------</h6>
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
    

mounted(){
     let cy = cytoscape({
        container: document.getElementById('cy'),
        elements: [
        // nodes
  { data: { id: 'a' , content : "DTO :[0,20] \n DTA :[0,20]" } },
  { data: { id: 'b' } },
  { data: { id: 'c' } },
  { data: { id: 'd' } },
  { data: { id: 'e' } },
  { data: { id: 'f' } },
  // edges
  {
    data: {
      id: 'ab',
      source: 'a',
      target: 'b'
    }
  },
  {
    data: {
      id: 'cd',
      source: 'c',
      target: 'd'
    }
  },
  {
    data: {
      id: 'ef',
      source: 'e',
      target: 'f'
    }
  },
  {
    data: {
      id: 'ac',
      source: 'a',
      target: 'c'
    }
  },
  {
    data: {
      id: 'be',
      source: 'b',
      target: 'e'
    }
  }
],
    style: [
        {
            selector: 'node',
            style: {
                shape: 'rectangle',
                'background-color': 'purple',
                height:"53rem",
                width:"53rem",
            label: 'data(id)',
          

            },
          
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