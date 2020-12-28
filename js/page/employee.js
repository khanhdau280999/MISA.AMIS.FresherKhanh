$(document).ready(function () {
    new EmployeeJS();
    dialogDetail = $(".m-dialog").dialog({
        autoOpen: false,
        fluid: true,
        minWidth: 700,
        resizable: true,
        position: ({ my: "center", at: "center", of: window }),
        modal: true
    });
})

/**
 * Class quản lý sự kiện cho trang Employee
 * CreatedBy: NVKHANH(25/12/2020)
 * */

class EmployeeJS extends BaseJS {
    constructor() {
        super();
        //this.loadData();
    }

    setApiRouter() {
        this.apiRouter = "/api/employees";
    }
    /**
     * Load dữ liệu
     * CreatedBy: NVKhanh (25/12/2020)
     * */
    //loadData() {
    //    Lấy dữ liệu về:
    //    $.ajax({
    //        url: "http://api.manhnv.net/api/employees",
    //        method: "GET",
    //    }).done(function (res) {
    //        var data = res;
    //        $.each(data, function (index, item) {
    //            var dateOfBirth = item["DateOfBirth"];
    //            var salary = item.Salary;
    //            salary = formatMoney(salary);
    //            dateOfBirth = formatDate(dateOfBirth);
    //            var checkbox = `<input type="checkbox" />`;
    //            if (item.Gender > 0) {
    //                var checkbox = `<input type="checkbox" checked />`;
    //            }
    //            var tr = $(`<tr>
    //                    <td><div><span>`+ item.EmployeeCode + `</span></div></td>
    //                    <td><div><span>`+ item['FullName'] + `</span></div></td>
    //                    <td><div class="text-align-center">`+ checkbox + `</div></td>
    //                    <td><div><span>`+ dateOfBirth + `</span></div></td>
    //                    <td><div><span>`+ item['PhoneNumber'] + `</span></div></td>
    //                    <td><div><span>`+ item['Email'] + `</span></div></td>
    //                    <td><div><span>`+ item['PositionName'] + `</span></div></td>
    //                    <td><div><span>`+ item['DepartmentName'] + `</span></div></td>
    //                    <td><div class="text-align-right"><span>`+ salary + `</span></div></td>
    //                    <td style="max-width:100px"><div style="max-width:250px">`+ item['Address'] + `</div></td>
    //                    <td><div><span>`+ item['WorkStatusName'] + `</span></div></td>

    //                </tr>`);
    //            $('table tbody').append(tr);
    //        });

    //    }).fail(function (res) {

    //    })
    //binding dữ liệu lên table:
    //}
    /**
    * thêm dữ liệu
    * CreatedBy: NVKhanh (25/12/2020)
    * */
    add() {

    }
    /**
     * sửa dữ liệu
     * CreatedBy: NVKhanh (25/12/2020)
     * */
    edit() {

    }
    /**
     * xóa dữ liệu
     * CreatedBy: NVKhanh (25/12/2020)
     * */
    delete() {

    }

}
