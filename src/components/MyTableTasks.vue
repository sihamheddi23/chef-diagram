<template>
 <div class="mx-1 w-100 t">
        <table class="table-secondary  table  ">
            <thead class="thead-purple ">
              <tr >
                <th scope="col">Nom de tache</th>
                <th scope="col">Antériorité</th>
                <th scope="col">Durée</th>
                <th scope="col">Nombre ressources</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <input type="text" class="form-control"   placeholder="nom"></td>
                <td>
                  <select  class="form-control" >
                    <option value="">A</option>
                      <option value="">B</option>
                  </select>
                </td>
                <td><input type="number" class="form-control"   placeholder="durée"></td>
                <td><input type="number" class="form-control"   placeholder="nombre "></td>
                <td>
                  <button class="btn btn-danger"> <i class="bi bi-trash3"></i> </button>
                </td>
              </tr>
          <tr>
                <td> <input type="text" class="form-control"   placeholder="nom"></td>
                <td>
                  <select  class="form-control" >
                    <option value="">A</option>
                      <option value="">B</option>
                  </select>
                </td>
                <td><input type="number" class="form-control"   placeholder="durée"></td>
                <td><input type="number" class="form-control"   placeholder="nombre "></td>
                <td>
                  <button class="btn btn-danger"> <i class="bi bi-trash3"></i> </button>
                </td>
              </tr>
              <tr>
                <td> <input type="text" class="form-control"   placeholder="nom"></td>
                <td>
                  <select  class="form-control" >
                    <option value="">A</option>
                      <option value="">B</option>
                  </select>
                </td>
                <td><input type="number" class="form-control"   placeholder="durée"></td>
                <td><input type="number" class="form-control"   placeholder="nombre "></td>
                <td>
                  <button class="btn btn-danger"> <i class="bi bi-trash3"></i> </button>
                </td>
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
.thead-purple{
  background-color: rgb(78, 29, 124);
  color: white;
}
.table-secondary {
  background-color: rgb(216, 213, 213) !important;
}
/* .table tbody {
  height: 5em;
  overflow: scroll;
} */
.table {
  width: 94%;
  margin: 0 1.5rem;
 
}
</style>