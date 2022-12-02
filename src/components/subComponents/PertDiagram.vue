<template>
     <div class="diagram">
          <div class="taskNode">

          </div>
             <div class="taskNode">

          </div>
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
export default {

}
</script>

<style>
.diagram {
    width: 100%;
    height: 60vh;
    border: 1px solid grey;

}
.taskNode {
    width: 7rem;
    height: 7rem;
    margin: 2rem;
    background: white;
    border: 1px solid grey;
}
.info {
    background: white;
      height: 28vh;
       overflow-y:hidden;
      overflow-x: scroll;
}
</style>