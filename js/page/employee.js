//$(document).ready(function () {
//    loadData(1);
//});

//function loadData() {
//    //Lấy dữ liệu về:
//    $.ajax({
//        url: "https://api.manhnv.net/api/employees",
//        method: "GET",
//    }).done(function (res) {
//        var data = res;
//        $.each(data, function (index, item) {
//            //var tr = $(`<tr>
//            //            <td style="max-width:100px"><div><span span style="width:100px">NV00001</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Phú Quốc Khánh</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Nam</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">28/09/1999</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Nhóm khách hàng</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">0967204360</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Email</span></div></td>
//            //            <td style="max-width:100px"><div><span style="width:100px">Thụy Khuê,Tây Hồ,Hà Nội 123345123</span></div></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Số tiền nợ</span></div>></td>
//            //            <td style="max-width:100px"><div><span span style="width:100px">Mã thẻ thành viên</span></div></td>
//            //        </tr>`);
//            var tr = $(`<tr>
//                        <td style="max-width:100px"><span span style="width:100px">NV01</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Phú Quốc Khánh</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Nam</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">28/09/1999</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Nhóm khách hàng</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">0967204360</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Email</span></td>
//                        <td style="max-width:100px"><span style="width:100px">Thụy Khuê,Tây Hồ,Hà Nội 123345123</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Số tiền nợ</span></td>
//                        <td style="max-width:100px"><span span style="width:100px">Mã thẻ thành viên</span></td>
//                    </tr>`);
//            $('table tbody').append(tr);
//        });
        
//    }).fail(function (res) {

//    })
//    //binding dữ liệu lên table:
//}