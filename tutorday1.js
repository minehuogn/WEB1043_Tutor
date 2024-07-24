// Chọn bài tập
let choice = prompt("Chọn bài tập:\n1. Xác định nhóm tuổi\n2. Tính điểm và thông báo kết quả\n3. Quản lý mảng");

switch (choice) {
    case '1':
        // Bài 1: Xác định nhóm tuổi
        let inputAge = prompt(`Mời bạn nhập tuổi : `);
        let age = parseInt(inputAge);

        switch (true) {
            case isNaN(age) || age <= 0:
                alert(`Vui lòng nhập giá trị hợp lệ`);
                break;
            case age < 12:
                alert(`Bạn là con nít`);
                break;
            case age >= 12 && age <= 17:
                alert(`Thanh niên rồi nè`);
                break;
            default:
                alert(`Đủ tuổi lấy vợ`);
                break;
        }
        break;

    case '2':
        // Bài 2: Tính điểm và thông báo kết quả
        let diemTB = prompt(`Nhập điểm trung bình : `);
        let diemFinal = prompt(`Nhập điểm cuối kỳ : `);

        let dtb = parseFloat(diemTB);
        let dck = parseFloat(diemFinal);

        switch (true) {
            case isNaN(dtb) || dtb < 0 || dtb > 10 || isNaN(dck) || dck < 0 || dck > 10:
                alert(`Vui lòng nhập điểm hợp lệ`);
                break;
            default:
                let diemTrungBinh = dck * 0.6 + dtb * 0.4;
                if (diemTrungBinh >= 5) {
                    alert(`Pass xanh lè rồi`);
                } else {
                    let diemCan = (5 - diemTrungBinh).toFixed(2);
                    alert(`Học Lại. Thiếu ${diemCan} để qua môn.`);
                }
                break;
        }
        break;

    case '3':
        // Bài 3: Quản lý mảng
        let myArr1 = ['SD1801', 'SD1802', 'SD1803'];
        let myArr2 = ['SD1804', 'SD1805', 'SD1806'];

        let operation = prompt(`Chọn thao tác:\n1. Push\n2. Pop\n3. Shift\n4. Concat`);

        switch (operation) {
            case '1':
                // Thêm phần tử mới vào cuối mảng
                myArr1.push('SD1804');
                console.log(myArr1);
                break;
            case '2':
                // Xoá phần tử cuối cùng
                let lastClss = myArr1.pop();
                console.log(myArr1);
                break;
            case '3':
                // Xoá phần tử đầu tiên
                let firstClss = myArr1.shift();
                console.log(myArr1);
                break;
            case '4':
                // Kết hợp hai mảng
                let concatmyArr = myArr1.concat(myArr2);
                console.log(concatmyArr);
                break;
            default:
                alert(`Chọn thao tác không hợp lệ.`);
                break;
        }
        break;

    default:
        alert(`Chọn bài tập không hợp lệ.`);
        break;
}

//1. Tính tổng các phần tử trong mảng(number), alert hiển thị tổng
//2. Tìm phần tử lớn nhất trong mảng, alert hiển thị phần tử
//3. Xoá phần tử ở vị trí thứ 3 trong mảng
