$(document).ready(function () {
    loadData();
});


/**
 * Load dữ liệu
 * CreatedBy:NVKHANH (24/12/2021)
 * */
function loadData() {
    //Lấy dữ liệu về:
    $.ajax({
        url: "https://api.pqkhanh.net/api/customer",
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
                        <td style="max-width:100px"><span span style="width:100px">`+ item.CustomerCode +`</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ item['FullName'] + `</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ checkbox + `</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ dateOfBirth +`</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ item['GroupCustomer'] +`</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ item['PhoneNumber'] +`</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ item['Email'] +`</span></td>
                        <td style="max-width:100px"><span style="width:100px">`+ item['Address'] +`</span></td>
                        <td class="text-align-right" style="max-width:100px"><span span style="width:100px">`+ item['InDebt'] +`</span></td>
                        <td style="max-width:100px"><span span style="width:100px">`+ item['MemberCode'] +`</span></td>
                    </tr>`);
            $('table tbody').append(tr);
        });
    }).fail(function (res) {

    })
    //binding dữ liệu lên table:
}

/**
 * CreatedBy: NVKHANH (24/12/2020)
 * Format dữ liệu ngày tháng sang ngày/tháng/năm
 * @param {any} date tham số có kiểu dữ liệu bất kỳ
 * 
 */
function formatDate(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    } else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return day + '/' + month + '/' + year;
    }
   
}

/**
 * Hàm định dạng hiển thị tiền tệ
 * @param {Number} money Số tiền
 * CreatedBy: NVKHANH (24/12/2020)
 */
function formatMoney(money) {

    return '$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}