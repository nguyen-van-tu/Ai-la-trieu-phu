let dsCauHoi = [
    {
        noiDung:"Câu 1 :Tên loại thức uống nào vừa có sắt vừa có canxi",
        dapAn1:"A:Cocacola",
        dapAn2:"B:Pepsi",
        dapAn3:"C:Cafe",
        dapAn4:"D:Tà tưa",
        dapAnDung:3
    },
    {
        noiDung:"Câu 2 :Messi đã dành được bao nhiêu quả bóng vàng ?",
        dapAn1:"A:4",
        dapAn2:"B:5",
        dapAn3:"C:6",
        dapAn4:"D:7",
        dapAnDung:3
    },
    {
        noiDung:"Câu 3 :1 giọt nước cộng 1 giọt nước bằng mấy giọt nước?",
        dapAn1:"A:1",
        dapAn2:"B:2",
        dapAn3:"C:3",
        dapAn4:"D:4",
        dapAnDung:1
    },
    {
        noiDung:"Câu 4 :Brazil đã có bao nhiêu lần vô địch world cup ?",
        dapAn1:"A:4",
        dapAn2:"B:5",
        dapAn3:"C:6",
        dapAn4:"D:7",
        dapAnDung:2
    },
    {
        noiDung:"Câu 5 :Hai người đào trong 2h được 1 cái hố. Hỏi 1 người đào nửa ngày được bao nhiêu cái hố ?",
        dapAn1:"A:Nửa hố",
        dapAn2:"B:12 hố",
        dapAn3:"C:6 hố",
        dapAn4:"D:1 hố",
        dapAnDung:3
    },
    {
        noiDung:"Câu 6 :Bố mẹ có 6 người con trai, mỗi người con trai có một đứa em gái. Vậy gia đình đó có mấy người?",
        dapAn1:"A:8",
        dapAn2:"B:9",
        dapAn3:"C:10",
        dapAn4:"D:11",
        dapAnDung:2
    },
    {
        noiDung:"Câu 7:4 - 3 × 0 + 2 ÷ 2 = ?",
        dapAn1:"A:5",
        dapAn2:"B:1,5",
        dapAn3:"C:2",
        dapAn4:"D:4",
        dapAnDung:1
    },
    {
        noiDung:"Câu 8 :Đâu là tên một loại bánh ?",
        dapAn1:"A:Khoái",
        dapAn2:"B:Thích",
        dapAn3:"C:Vui",
        dapAn4:"D:Sướng",
        dapAnDung:1
    },
    {
        noiDung:"Câu 9 :Bộ phim Chị Dậu được chuyển thể từ tác phẩm văn học nào?",
        dapAn1:"A:Vợ chồng A Phủ",
        dapAn2:"B:Tắt đèn",
        dapAn3:"C:Chí Phèo",
        dapAn4:"D:Thúy Kiều",
        dapAnDung:2
    },
    {
        noiDung:"Câu 10 :Điền từ còn thiếu vào chỗ trống trong câu: ”Đục nước béo …”?",
        dapAn1:"A:Vạc",
        dapAn2:"B:Cá",
        dapAn3:"C:Mèo",
        dapAn4:"D:Cò",
        dapAnDung:4
    },
];

let viTriCauHoi = 0;
dienNDCauHoi();
function clickDapAn1() {
    common(1);
}
function clickDapAn2() {
    common(2);
}
function clickDapAn3() {
    common(3);
}
function clickDapAn4() {
    common(4);
}

function common(dapAnDung) {
    if (dsCauHoi[viTriCauHoi].dapAnDung == dapAnDung) {
        viTriCauHoi += 1;
        // alert('Bạn đã trả lời đúng');

        dienNDCauHoi();
    } else {
        alert('Bạn đã trả lời sai');
        window.location.href = "trangchu.html";
    }
    if(viTriCauHoi === 11){
        alert('bạn đã trở thành tỷ phú');
        window.location.href = "trangchu.html";
    }
}

function dienNDCauHoi(){
    document.getElementById('noi-dung').innerHTML = dsCauHoi[viTriCauHoi].noiDung;
    document.getElementById('dap-an1').innerHTML = dsCauHoi[viTriCauHoi].dapAn1;
    document.getElementById('dap-an2').innerHTML = dsCauHoi[viTriCauHoi].dapAn2;
    document.getElementById('dap-an3').innerHTML = dsCauHoi[viTriCauHoi].dapAn3;
    document.getElementById('dap-an4').innerHTML = dsCauHoi[viTriCauHoi].dapAn4;
}
