﻿class BaseJS {
    constructor() {
        this.getDataUrl = null;
        this.setDataUrl();
        this.loadData();
        this.initEvents();
    }
    setDataUrl() {

    }

    initEvents() {
        var me = this;
        // Sự kiện click khi nhấn thêm mới:
        $('#btnAdd').click(function () {
            //Hiển thị dialog thông tin chi tiết:
            dialogDetail.dialog('open');
        })
        // Load lại dữ liệu khi nhấn button nạp:
        // Sự kiện click khi refresh thêm mới:
        $('#btnRefresh').click(function () {
            me.loadData();
        })
        // Ẩn form chi tiết khi nhấn hủy:
        $('#btnCancel').click(function () {
            dialogDetail.dialog('close');
        })
        // Thực hiện lưu dữ liệu khi nhấn button [Lưu] trên form chi tiết:
        $('#btnSave').click(function () {
            // validate dữ liệu:
            var inputValidates = $('input[required], input[type="email"]');
            $.each(inputValidates, function (index, input) {
                var value = $(input).val();

                $(input).trigger('blur');
            })
            var inputNotValids = $('input[validate="false"]');
            if (inputNotValids && inputNotValids.length > 0) {
                alert("Dữ liệu không hợp lệ vui lòng kiểm tra lại");
                inputNotValids[0].focus();
                return;
            }
            // thu thập thông tin dữ liệu -> build thành object
            var customer = {
                "CustomerCode": $('#txtCustomerCode').val(),
                "FullName": $('#txtFullName').val(),
                "Address": $('#txtAddress').val(),
                "DateOfBirth": $('#dtDateOfBirth').val(),
                "Email": $('#txtEmail').val(),
                "PhoneNumber": $('#txtPhoneNumber').val(),
                "CustomerGroupId": "00000000-0000-0000-0000-000000000000",
                "MemberCardCode": $('#txtMemberCardCode').val()
            }

            // gọi service tương ứng thực hiện lưu dữ liệu:
            $.ajax({
                url: 'http://api.manhnv.net/api/customers',
                method: 'POST',
                data: JSON.stringify(customer),
                contentType: 'application/json'
            }).done(function (res) {
                // Sau khi lưu thành công thì: 
                //đưa ra thông báo thành công 
                //ẩn form chi tiết 
                //load lại dữ liệu
                alert('thêm thành công');
                dialogDetail.dialog('close');
                me.loadData();
            }).fail(function (res) {

            })


        })

        // Hiển thị thông tin chi tiết khi nhấn đúp chuột chọn 1 bản ghi trên danh sách dữ liệu

        $('table tbody').on('dblclick', 'tr', function () {
            dialogDetail.dialog('open');
        })


        /*
         * validate bắt buộc nhập:
         * CreatedBy: PQKHANH (27/12/2020)
         */
        $('input[required]').blur(function () {
            //this.classList.add("txtCustomerCode");
            // kiểm tra dữ liệu đã nhập , nếu để trống thì cảnh báo:
            var value = $(this).val();
            if (!value) {
                $(this).addClass('border-red');
                $(this).attr('title', 'trường này không được phép để trống');
                $(this).attr("validate", false)
            } else {
                $(this).removeClass('border-red');
                $(this).attr("validate", true)
            }

        })

        /*
       * validate email đúng định dạng
       * CreatedBy: NVKHANH (27/12/2020)
       */
        $('input[type="email"]').blur(function () {
            var value = $(this).val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (!testEmail.test(value)) {
                $(this).addClass('border-red');
                $(this).attr('title', 'Email không đúng định dạng.');
                $(this).attr("validate", false);
            } else {
                $(this).removeClass('border-red');
                $(this).attr("validate", true);
            }
        })
    }


    /**
     * Load dữ liệu
     * CreatedBy: NVKHANH (25/12/2020)
     * */
    loadData() {
        try {
            $('table tbody').empty();
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