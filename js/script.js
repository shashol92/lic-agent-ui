$(document).ready(function () {
    let url = "https://jsonplaceholder.typicode.com/users";
    // let url = "http://localhost:3000/admin/getUsers";
    // let url = "http://localhost:3000/item/getItems";
    $.get(url, (result) => {
        // console.log("result--.", result);
        $('#example').DataTable({
            // ajax: 'data/objects.txt',
            "data" : result,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'username' },
                { data: 'email' },
                { data: 'phone' },
                { data: 'website' },
            ],
        });
    })
    
});