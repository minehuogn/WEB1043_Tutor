// // Ôn Tập về Form, Form validation 
// OnChange on Blur
// Onchange : được kích hoạt khi giá trị của element thay đổi 
// Onblur: khi element không được focus

// input text
// chuỗi kỹ tự, regex định nghĩa cái trường nhập liệu 
// /^$/ 
// \d: cho phép nhập tất cả các số
// \w bất kỳ chữ cái và số, gạch dưới
// \s : cho phép ký tự có khoảng trắng
// [a-z A-Z 0-9] : dấu ngoặc vuông,khớp với bất kỳ những gì nằm dấu ngoặc vuông
// [^ ] : lấy khớp với ngoài ngoặc vuông
// {a,b} : lấy trong khoảng, khớp giá trị từ n đến m lần {10,11}
// Regex: Phone number: /^\d{10,11}$/ - \d cho phép chỉ nhập số, {10,11}lấy input 10 và 11 số
// Regex Pattern: email, phonenumber 
// namemssv@fpt/email/gmail/domain.com/vn/
// => pattern = kytuchuvaso+ '@' + 'kytu' + '.'+ 'kytu'
// VD: /^[\w]+@[a-zA-Z]+\.[a-zA-Z]$/
// VD đuôi FPT: /^[\w]+@fpt[a-zA-Z]+\.edu[a-zA-Z]+\.vn[a-z]$/
// +@ : @ phải xuất hiện ít nhất 1 lần
// +\. : Bắt buộc dấu chấm xuất hiện ít nhất 1 lần, và không được xuống dòng

// Đề bài:
// Yêu cầu Form:
// Username:
// Tối đa 16 ký tự.
// Bắt buộc phải nhập.
// Password:
// Từ 8 đến 16 ký tự.
// Bắt buộc phải nhập.
// Phone Number:
// Không bắt buộc.
// Email:
// Không bắt buộc.
// Gender:
// Chọn một trong hai tùy chọn: Nam hoặc Nữ.
// Specialization:
// Chọn một hoặc nhiều tùy chọn từ danh sách chuyên ngành (Computer Science, Information Technology).
// Class:
// Chọn một lớp từ danh sách (Class 1, Class 2, Class 3).
// Yêu cầu Hiển Thị Điểm:
// Nếu chọn "Class 1", hiển thị điểm là 5 điểm.
// Nếu chọn "Class 2", hiển thị điểm là 6 điểm.
// Nếu chọn "Class 3", hiển thị điểm là 7 điểm.
// Các Yêu Cầu Kỹ Thuật:
// Sử dụng onblur và onchange để kiểm tra lỗi hiện tại cho các trường tương ứng.
// Khi người dùng chọn lớp, trường điểm tương ứng sẽ được hiển thị ngay dưới trường lớp.
// Cung cấp hai nút:
// Check Info: Hiển thị thông tin người dùng đã nhập trong một hộp thoại.
// Login: Đăng nhập với username là "admin" và password là "12345". Kiểm tra thông tin và thông báo đăng nhập thành công hoặc thất bại.
// Yêu Cầu Xử Lý Lỗi:
// Hiển thị thông báo lỗi cho các trường không hợp lệ.
// Đảm bảo các trường "Username" và "Password" được kiểm tra tính bắt buộc và độ dài hợp lệ.

