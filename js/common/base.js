class BaseJS {
    constructor() {
        this.getDataUrl = null;
        this.setDataUrl();
        this.loadData();
    }
    setDataUrl() {

    }

    loadData() {

        // Lấy thông tin các cột dữ liệu
        var columns = $('table thead th');
        var fieldNames = [];
        var getDataUrl = this.getDataUrl;

        //Lấy dữ liệu về:
        $.ajax({
            url: getDataUrl,
            method: "GET",
        }).done(function (res) {
            $.each(res, function (index, obj) {
                var tr = $(`<tr></tr>`);
                // Lấy thông tin dữ liệu sẽ map tương ứng với các cột:
                $.each(columns, function (index, th) {
                    var td = $(`<td><div><span></span></div></td>`);
                    var fieldName = $(th).attr('fieldname');
                    var value = obj[fieldName];
                    td.append(value)
                    $(tr).append(td);
                })
                $('table tbody').append(tr);
            })

        }).fail(function (res) {

        })

    }

}