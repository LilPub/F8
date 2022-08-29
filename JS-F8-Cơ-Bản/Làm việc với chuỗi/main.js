// -------------Làm việc với chuỗi-------------- 
//1. Tạo chuỗi
var fullName = 'Ngoc Hiep';  // Nên dùng cách này

var fullName2 = new String('Ngoc Hiep'); //Phải khởi tạo đối tượng, mất thời gian, kiểu dữ liệu tạo ra là object

//2. Một số case sử dụng backslash (\)
// var string = 'Hiep la 'Sieu nhan''; // lỗi

var string  = 'Hiep la \'Sieu nhan\''; // oke 

//3. Xem độ dài chuỗi
var fullName = 'Ngoc Hiep'; 

console.log(fullName.length)

//4. Chú ý độ dài khi viết code

//5. Template string ES6
var firstName = 'Hiep'
var lastName = 'Ngoc'

var fullName = `Toi la: ${lastName} ${firstName}`;


//------------------Làm việc với chuỗi----------------
//1. Length : đếm độ dài chuỗi

//2. Find index : tìm vị trí 1 ký tự trong chuỗi
var myString = 'Ngoc Hiep So 1'
console.log(myString.indexOf('Hiep'))

//3. Cut string
console.log(myString.slice(5,9)) // cắt chuỗi từ vị trí số 5->8: Hiep

//4. Replace
console.log(myString.replace('So','Number')) //So sẽ được thay thành Number

//5. Convert to upper case
console.log(myString.toLocaleUpperCase()) //chuyển chuỗi thành chữ hoa

//6. Convert to lower case
console.log(myString.toLocaleLowerCase()) //chuyển chuỗi thành chữ thường

//7. Trim : loại bỏ khoảng trắng thừa ở hai đầu chuỗi

//8. Split : cắt chuỗi thành array
var myCouse = 'JS, PHP, Ruby'
console.log(myCouse.split(','))

//9. Get a character by index: lấy ký tự bởi vị trí truyền vào