/* Yêu cầu nhập nội dung tiềm kiếm */
function sendData() {
    var frm = document.forms['regForm'];
    if (frm.timkiem.value.length == 0) {
        alert("Vui lòng nhập nội dung !");
        frm.timkiem.focus();
        return false;
    }
    return true;
}

/* Xác thực form Đăng Ký */
function xacThucForm_DK() {
    var frm = document.forms['form_DK'];
    var hoten = document.forms['form_DK'].hoten;
    var email = document.forms['form_DK'].email;
    var password = document.forms['form_DK'].psw;
    var repassword = document.forms['form_DK'].psw2;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var hotenReg = /^[a-zA-Z ]{1,15}$/;

    if (hoten.value.length < 4) {
        alert("Họ tên phải trên 4 ký tự !");
        frm.hoten.focus();
        return false;
    } else if (hotenReg.test(hoten.value) == false) {
        alert("Họ tên không hợp lệ. Vui lòng nhập họ tên không dấu và không chứa ký tự đặt biệt !");
        frm.hoten.focus();
        return false;
    } else if (emailReg.test(email.value) == false) {
        alert("Email không hợp lệ !");
        frm.name_email.focus();
        return false;
    } else if (password.value.length < 8) {
        alert("Mật khẩu phải trên 8 ký tự !");
        frm.psw.focus();
        return false;
    } else if (repassword.value.length < 8) {
        alert("Mật khẩu phải trên 8 ký tự !");
        frm.psw2.focus();
        return false;
    }
    // Kiểm tra 2 mật khẩu phải trùng nhau
    else if (password.value != repassword.value) {
        alert("Mật khẩu không giống nhau !")
        frm.psw2.focus();
        return false;
    } else if (document.getElementById('nam').checked == false && document.getElementById('nu').checked == false) {
        alert("Vui lòng chọn giới tinh !")
        return false;
    } else if (document.getElementById('checkbox').checked == false) {
        alert("Vui lòng chấp nhận điều khoảng của chúng tôi !")
        return false;
    }
    alert("Đã gửi dữ liệu !");
    return true;
}

/* Xác thực form Liên Hệ */
function xacThucForm_LH() {
    var frm = document.forms['form_LH'];
    var hoten = document.forms['form_LH'].hoten;
    var email = document.forms['form_LH'].email;
    var noidung = document.forms['form_LH'].noidung;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var hotenReg = /^[a-zA-Z ]{1,15}$/;

    if (hoten.value.length < 4) {
        alert("Họ tên phải trên 4 ký tự !");
        frm.hoten.focus();
        return false;
    } else if (hotenReg.test(hoten.value) == false) {
        alert("Họ tên không hợp lệ. Vui lòng nhập họ tên không dấu và không chứa ký tự đặt biệt !");
        frm.hoten.focus();
        return false;
    } else if (emailReg.test(email.value) == false) {
        alert("Email không hợp lệ !");
        frm.email.focus();
        return false;
    } else if (noidung.value.length < 10) {
        alert("Nội dung phải trên 10 ký tự !");
        frm.nd.focus();
        return false
    }
    alert("Đã gửi dữ liệu !");
    return true;
}

/* Xác thực form Đăng Nhập */
function xacThucForm_DN() {
    var frm = document.forms['form_DN'];
    var email = document.forms['form_DN'].email;
    var password = document.forms['form_DN'].psw;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailReg.test(email.value) == false) {
        alert("Email không hợp lệ !");
        frm.name_email.focus();
        return false;
    } else if (password.value.length < 8) {
        alert("Mật khẩu phải trên 8 ký tự !");
        frm.psw.focus();
        return false;
    }
    alert("Đã gửi dữ liệu !");
    return true;
}

/* Trang Sản Phẩm  */

var book = [{
        "code": "101",
        "type": "new",
        "name": "Chúng ta học thế nào",
        "price": 120000,
        "photo": "./data/image/sanpham/sach-moi/chung-ta-hoc-the-nao.jpg"
    },
    {
        "code": "102",
        "type": "new",
        "name": "Làm thế nào để con thôi ngang bướng",
        "price": 116000,
        "photo": "./data/image/sanpham/sach-moi/lam-the-nao-de-con-thoi-ngang-buong.jpg"
    },
    {
        "code": "103",
        "type": "new",
        "name": "Tên cô ấy là",
        "price": 110000,
        "photo": "./data/image/sanpham/sach-moi/ten-co-ay-la.jpg"
    },
    {
        "code": "104",
        "type": "new",
        "name": "Xứ Cát",
        "price": 199000,
        "photo": "./data/image/sanpham/sach-moi/xu-cat.jpg"
    },
    {
        "code": "201",
        "type": "hot",
        "name": "Tin Tức Kiến Tạo",
        "price": 141000,
        "photo": "./data/image/sanpham/sach-ban-chay/tin-tuc-kien-tao.jpg"
    },
    {
        "code": "202",
        "type": "hot",
        "name": "Chú lính chì dũng cảm",
        "price": 39000,
        "photo": "./data/image/sanpham/sach-ban-chay/chu-linh-chi-dung-cam.jpg"
    },
    {
        "code": "203",
        "type": "hot",
        "name": "Để con được ốm",
        "price": 76000,
        "photo": "./data/image/sanpham/sach-ban-chay/de-con-duoc-om.jpg"
    },
    {
        "code": "204",
        "type": "hot",
        "name": "Bác Hồ Với Việc Đọc Và Tự Học",
        "price": 55000,
        "photo": "./data/image/sanpham/sach-ban-chay/bac-ho-voi-viec-doc-va-tu-hoc.jpg"
    },
    {
        "code": "301",
        "type": "literature",
        "name": "Cà phê cùng Tony",
        "price": 69000,
        "photo": "./data/image/sanpham/sach-van-hoc/ca-phe-cung-tony.jpg"
    },
    {
        "code": "302",
        "type": "literature",
        "name": "Chúng ta rồi sẽ hạnh phúc, theo những cách khác nhau",
        "price": 70000,
        "photo": "./data/image/sanpham/sach-van-hoc/chung-ta-roi-se-hanh-phuc.jpg"
    },
    {
        "code": "303",
        "type": "literature",
        "name": "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2",
        "price": 64000,
        "photo": "./data/image/sanpham/sach-van-hoc/mot-cuon-sach-buon-cuoi.jpg"
    },
    {
        "code": "304",
        "type": "literature",
        "name": "Truyện ngắn Nguyên Hồng",
        "price": 31000,
        "photo": "./data/image/sanpham/sach-van-hoc/truyen-ngan-nguyen-hong.jpg"
    },
    {
        "code": "401",
        "type": "economic",
        "name": "24 Bài học sống còn để đầu tư thành công trên thị trường chứng khoán",
        "price": 99000,
        "photo": "./data/image/sanpham/sach-kinh-te/24-bai-hoc-song-con.jpg"
    },
    {
        "code": "402",
        "type": "economic",
        "name": "Bước đi ngẫu nhiên trên phố Wall",
        "price": 177000,
        "photo": "./data/image/sanpham/sach-kinh-te/buoc-di-ngau-nhien-tren-pho-wall.jpg"
    },
    {
        "code": "403",
        "type": "economic",
        "name": "Nghĩ giàu làm giàu",
        "price": 88000,
        "photo": "./data/image/sanpham/sach-kinh-te/nghi-giau-lam-giau.jpg"
    },
    {
        "code": "404",
        "type": "economic",
        "name": "Từ tốt đến vĩ đại",
        "price": 110000,
        "photo": "./data/image/sanpham/sach-kinh-te/tu-tot-den-vi-dai.jpg"
    },
    {
        "code": "501",
        "type": "children",
        "name": "Cảm xúc của con màu gì",
        "price": 35000,
        "photo": "./data/image/sanpham/sach-thieu-nhi/cam-xuc-cua-con-mau-gi.jpg"
    },
    {
        "code": "502",
        "type": "children",
        "name": "Chuyện con mèo dạy hải âu bay",
        "price": 34000,
        "photo": "./data/image/sanpham/sach-thieu-nhi/chuyen-con-meo-day-hai-au-bay.jpg"
    },
    {
        "code": "503",
        "type": "children",
        "name": "Con trai, con gái khác nhau ạ?",
        "price": 52000,
        "photo": "./data/image/sanpham/sach-thieu-nhi/con-trai-con-gai-khac-nhau-a.jpg"
    },
    {
        "code": "504",
        "type": "children",
        "name": "Danh nhân thế giới Anhxtanh",
        "price": 30000,
        "photo": "./data/image/sanpham/sach-thieu-nhi/danh-nhan-the-gioi-anhxtanh.jpg"
    },
    {
        "code": "601",
        "type": "foreign",
        "name": "Bạch Dạ Hành",
        "price": 146000,
        "photo": "./data/image/sanpham/van-hoc-nuoc-ngoai/bach-da-hanh.jpg"
    },
    {
        "code": "602",
        "type": "foreign",
        "name": "Khuyến học",
        "price": 115000,
        "photo": "./data/image/sanpham/van-hoc-nuoc-ngoai/khuyen-hoc.jpg"
    },
    {
        "code": "603",
        "type": "foreign",
        "name": "Sử ký III",
        "price": 180000,
        "photo": "./data/image/sanpham/van-hoc-nuoc-ngoai/su-ky-iii.jpg"
    },
    {
        "code": "604",
        "type": "foreign",
        "name": "Tội ác và hình phạt",
        "price": 210000,
        "photo": "./data/image/sanpham/van-hoc-nuoc-ngoai/toi-ac-va-hinh-phat.jpg"
    }
]


function showBook() {
    $("#new-book").append("<section class='col-12 mb-4 text-center'><h1>Sách mới</h1></section>");
    $("#hot-book").append("<section class='col-12 mb-4 text-center'><h1>Sách bán chạy</h1></section>");
    $("#literature-book").append("<section class='col-12 mb-4 text-center'><h1>Văn học trong nước</h1></section>");
    $("#economic-book").append("<section class='col-12 mb-4 text-center'><h1>Sách kinh tế</h1></section>");
    $("#children-book").append("<section class='col-12 mb-4 text-center'><h1>Sách thiếu nhi</h1></section>");
    $("#foreign-book").append("<section class='col-12 mb-4 text-center'><h1>Văn học nước ngoài</h1></section>");
    $.each(book, function(i, obj) {
        onebook = "<div class='col-3'><div id='book' class='card mb-4 shadow-sm'>" + `<img class='book-img' src='${obj.photo}'>` +
            "<div class='card-body'><p class='card-text text-truncate font-weight-bold'>" + obj.name +
            "</p><div class='d-flex justify-content-between align-items-center'>" + `<div class="btn-group"><input id='${obj.code}' type='number' name='quantity' class='btn btn-sm' min='0' max='99' value='0' size='1'><button type='button' class='btn btn-sm '><i class="header__cart-icon fas fa-shopping-cart"></i></button></div>` + "<small class='badge'>" +
            (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(obj.price)) + "</small></div></div></div></div>"
        switch (obj.type) {
            case 'new':
                $("#new-book").append(onebook);
                break;
            case 'hot':
                $("#hot-book").append(onebook);
                break;
            case 'literature':
                $("#literature-book").append(onebook);
                break;
            case 'economic':
                $("#economic-book").append(onebook);
                break;
            case 'children':
                $("#children-book").append(onebook);
                break;
            case 'foreign':
                $("#foreign-book").append(onebook);
                break;
            default:
        }

    });
    more = "<div class='col-12 mb-4 text-center'><button type='button' class='btn btn-outline-secondary'>Xem thêm</button></div>";
    $("#new-book").append(more);
    $("#hot-book").append(more);
    $("#literature-book").append(more);
    $("#economic-book").append(more);
    $("#children-book").append(more);
    $("#foreign-book").append(more);

}

$(document).ready(function() {
    showBook();
});