$(document).ready(function () {
    loadData();
});

class EmployeeJS {
    constructor() {

    }
}

/**
 * Load dữ liệu
 * CreatedBy: NVKhanh (25/12/2020)
 * */
function loadData() {
    //Lấy dữ liệu về:
    $.ajax({
        url: "http://api.manhnv.net/api/employees",
        method: "GET",
    }).done(function (res) {
        var data = res;
        $.each(data, function (index, item) {
            var dateOfBirth = item["DateOfBirth"];
            var salary = item.Salary;
            salary = formatMoney(salary);
            dateOfBirth = formatDate(dateOfBirth);
            var checkbox = `<input type="checkbox" />`;
            if (item.Gender > 0) {
                var checkbox = `<input type="checkbox" checked />`;
            }
            var tr = $(`<tr>
                        <td><div><span>`+ item.EmployeeCode + `</span></div></td>
                        <td><div><span>`+ item['FullName'] + `</span></div></td>
                        <td><div class="text-align-center">`+ checkbox +`</div></td>
                        <td><div><span>`+ dateOfBirth +`</span></div></td>
                        <td><div><span>`+ item['PhoneNumber'] +`</span></div></td>
                        <td><div><span>`+ item['Email'] +`</span></div></td>
                        <td><div><span>`+ item['PositionName'] +`</span></div></td>
                        <td><div><span>`+ item['DepartmentName'] + `</span></div></td>
                        <td><div class="text-align-right"><span>`+ salary +`</span></div></td>
                        <td style="max-width:100px"><div style="max-width:250px">`+ item['Address'] +`</div></td>
                        <td><div><span>`+ item['WorkStatusName'] +`</span></div></td>

                    </tr>`);
            $('table tbody').append(tr);
        });
        
    }).fail(function (res) {

    })
    //binding dữ liệu lên table:
}

