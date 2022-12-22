$(document).ready(function () {
    let url = "http://localhost:3000/item/getItems";
    $.get(url, (result) => {
        // console.log("result--.", result);
        $('#example').DataTable({
            "data" : result,
            columns: [
                { data: 'name' },
                { data: 'brand' },
                { data: 'category' },
                { data: 'size' },
                { data: 'quantity' },
                {
                    data: null,
                    "defaultContent": '<button class="btn btn-mini btn- primary pull-right"> View Service</button>'
                  }
                ],
            dom: 'Bfrtip',
            buttons: [
                  {
                    extend: 'print'
                  },
                  {
                    extend: 'pdf'
                  },
                  {
                    extend: 'excel'
                  }
            ],
        });
    
    })
    
});