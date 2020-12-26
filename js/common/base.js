class BaseJS {
    constructor() {
        this.getDataUrl = null;
        this.setDataUrl();
        this.loadData();
        this.initEvents();
    }
    setDataUrl() {

    }

    initEvents() {
        // Sự kiện click khi nhấn thêm mới:
        $(`#btnAdd`).click(function () {
            //Hiển thị dialog thông tin chi tiết:
            dialogDetail.dialog(`open`);
        })
        // Load lại dữ liệu khi nhấn button nạp:
        // Sự kiện click khi refresh thêm mới:
        $(`#btnRefresh`).click(function () {
            alert('load lại dữ liệu');
        })
        // Ẩn form chi tiết khi nhấn hủy:
        $(`#btnCancel`).click(function () {
            dialogDetail.dialog(`close`);
        })
        // Thực hiện lưu dữ liệu khi nhấn button [Lưu] trên form chi tiết:
        $(`#btnSave`).click(function () {
            dialogDetail.dialog(`close`);
        })
    }


    /**
     * Load dữ liệu
     * CreatedBy: NVKHANH (25/12/2020)
     * */
    loadData() {
        try {
            // Lấy thông tin các cột dữ liệu
            var columns = $('table thead th');
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
                        var formatType = $(th).attr('formatType');
                        switch (formatType) {
                            case "ddmmyyyy":
                                td.addClass("text-align-center");
                                value = formatDate(value);
                                break;
                            case "MoneyVND":
                                td.addClass("text-align-right");
                                value = formatMoney(value);
                                break;
                            default:
                                break;
                        }
                        td.append(value)
                        $(tr).append(td);
                    })
                    $('table tbody').append(tr);
                })

            }).fail(function (res) {

            })
        } catch (e) {
            //Ghi log lỗi:
            console.log(e);
        }
    

    }

}