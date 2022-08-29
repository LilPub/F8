//----------------Làm việc với mảng---------------
//1.Tạo mảng
var myArr = ['PHP','JS','RUBY']
console.log(myArr)

// cách kiểm tra biến có phải là array không(vì khi typeof mảng nó trả ra object)
console.log(Array.isArray(myArr))


//2.Truy xuất mảng

console.log(myArr.length)// độ dài mảng
console.log(myArr[0])// lấy phần tử vị trí số 0 của mảng



//----------------Làm việc với mảng--------------------
//1. To string: chuyển arr sang string
var language = ['PHP','JS','Ruby']
console.log(language.toString())

//2. Join: nối các phần tử trong mảng với nhau
console.log(language.join(' - '))

//3. Pop: xóa phần tử cuối mảng và trả về phần tử đã xóa
console.log(language.pop())

//4. Push: thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(language.push('C#'))

//5. Shift: xóa phần tử đầu mảng và trả về phần tử đã xóa
console.log(language.shift())

//6. Unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng

//7. Splicing: xóa cắt chèn phần tử mảng
//Xóa
language.splice(1, 1) //phần tử thứ nhất là vị trí xóa, phần tử số 2 là số lượng value được xóa

//Chèn
language.splice(1,0,'C++') //thêm C++ vào mảng tại vị trí 1
console.log(language)

//8. Concat: nối 2 mảng
var language2 = ['Dart','Java']
console.log(language.concat(language2))

//9. Slicing: cắt phần tử của mảng và trả về mảng có phần tử bị cắt
console.log(language.slice(1,2)) // tham số 1 là vị trí bắt đầu cắt, tham số 2 là vị trí cuối cùng
