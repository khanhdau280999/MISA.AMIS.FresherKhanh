$(document).ready(function () {
    loadData(1);
});

function loadData() {
    //Lấy dữ liệu về:
    $.ajax({
        url: "https://api.pqkhanh.net/api/employees",
        method: "GET",
    }).done(function (res) {
        var data = res;
    }).fail(function (res) {

    })
    //binding dữ liệu lên table:
}