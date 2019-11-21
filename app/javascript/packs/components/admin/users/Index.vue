<template>
  <div class="container">
    <div class="section section-data-tables">
      <div class="row">
        <div class="col s12 m12 l12">
          <div id="button-trigger" class="card card card-default scrollspy">
            <div class="card-content">
              <h4 class="card-title">DataTables example</h4>
              <div class="row">
                <div class="col s12">
                  <p>
                    DataTables has most features enabled by default, so all you need to do to use it with your own tables
                    is to call the construction function.
                  </p>
                  <p>
                    Searching, ordering, paging etc goodness will be immediately added to the table, as shown in this
                    example.
                  </p>
                </div>
                <div class="col s12">
                  <div id="data-table-simple_wrapper" class="dataTables_wrapper">
                    <table class="display dataTable dtr-inline" id="data-table-simple" role="grid" aria-describedby="data-table-simple_info" style="width: 1082px;">
                      <thead>
                        <tr role="row">
                          <th class="sorting" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 182px;" aria-label="Name: activate to sort column ascending">Name</th>
                          <th class="sorting_asc" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 263px;" aria-label="Position: activate to sort column descending" aria-sort="ascending">Position</th>
                          <th class="sorting" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 136px;" aria-label="Office: activate to sort column ascending">Office</th>
                          <th class="sorting" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 101px;" aria-label="Age: activate to sort column ascending">Age</th>
                          <th class="sorting" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 117px;" aria-label="Start date: activate to sort column ascending">Start date</th>
                          <th class="sorting" tabindex="0" aria-controls="data-table-simple" rowspan="1" colspan="1" style="width: 115px;" aria-label="Salary: activate to sort column ascending">Salary</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
}
</script>