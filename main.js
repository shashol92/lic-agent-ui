$(document).ready(function() {
    $("#example").DataTable({
        'ajax': 'data.json',
        'columns': [
            {'contacts': 'id'},
            {'contacts': 'name'},
            {'contacts': 'username'},
            {'contacts': 'email'},
            {'contacts': 'website'},
        ]
    });
  });