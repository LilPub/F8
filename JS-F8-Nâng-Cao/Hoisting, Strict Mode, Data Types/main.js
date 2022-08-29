// //------------------------Hoisting-----------------------
// //- đưa phần khai báo lên đầu phạm vi

// //-----------------
// //hoisting với var
// console.log(age);
// // console.log(fullName);
// var age = 16;

// //cách viết trên tương đương
// var age;
// console.log(age);
// // console.log(fullName);
// age = 16;
// //- vì thế nó sẽ in ra undefined vì age mới chỉ khai báo và sau khi log 
// // ra thì mới gán giá trị
// //- còn log fullName ra sẽ lỗi vì chưa được khai báo


// //------------------
// //hoisting với function declaration
// console.log(sum(1,2));

// function sum(a,b){
//     return a+b;
// }

// //hoisting nó sẽ đưa khai báo hàm lên trên
// //vì thế kết quả log ra là 3


// //------------------
// //hoisting với let và const
// {
//     // console.log(fullName);
//     let fullName = 'Ngoc Hiep';
// }

// //nó vẫn được hoisting nhưng không được khởi tạo giá trị
// //và bị đưa vào "Temporal Dead Zone"
// //và kết quả là lỗi


// //------------------
// //ví dụ
// const counter = count();

// console.log(counter());

// function count() {
//     let a = 0;

//     return makeCounter;

//     function makeCounter() {
//         return ++a;
//     }
//     //vì declaration function hoisting
//     //nên sẽ được đưa lên đầu
//     //vì thế makeCounter sẽ được thực thi trước khi return
// }

// //ví dụ
// var tip = 100;

// function saveMoney(){
//     return tip/2;
//     var tip = 200;
//     //var tip = 200; sẽ được hoisting và var tip; được đưa lên đầu
//     //và lúc đó tip đang undefined
//     //mà phép tính undefined với số sẽ là NaN
//     //vì vậy kết quả là NaN
// }

// console.log(saveMoney());



//------------------Strict mode---------------------
//Chế độ nghiêm ngặt, giúp code an toàn hơn
//cách sử dụng strict mode: thêm "use strict" vào đầu file js(có 3 cách)

// //ví dụ
// "use strict"
// fullName = "Ngoc Hiep";
// function testFunc() {
//     age = 21;
// }

// testFunc();

// console.log(age);
// console.log(fullName);
// //age và full name chưa được khai báo mà nó vẫn được gán giá trị và sử dụng
// //và age nó lại vô tình thành globel
// //để khắc phục các lỗ hổng trên ta sử dung strict mode và nó đã phát hiện được lỗi


// //ví dụ
// const student = {
//     fullName: "Ngoc Hiep"
// }
// student.fullName = "Nguyen Van A";// ta có thể sửa được giá trị của obj
// console.log(student);

// "use strict"
// const child = Object.freeze({
//     age: 21
// })

// child.age = 19;//không thể thay đổi được vì object.freeza đã đóng băng
// //và nó cũng không hề có thông báo
// //ta dùng strict mode để xem nó báo lỗi gì nhé
// console.log(child);

// ------------------
// nói chung: nó sẽ làm việc như sau
// (khi dử dụng strict mode) sẽ thông báo lỗi khi trường hợp đó lỗi hay sai logic
// mà không có thông báo

// Công dụng:
// tránh "quên" từ khóa khai báo biến
// tránh trùng tên biến lẫn tới lỗi logic
// sử dụng bộ nhớ hiệu quả vì tránh tạo biến globel
// -------------------



//---------------------Primitive Types & Reference Types----------------------
//value types(kiểu tham trị, kiểu giá trị nguyên thủy(đơn giản))
/**
 * String
 * Number
 * Boolean
 * BigInt
 * Symbol
 * undefined
 * null
 */

//ví dụ
var a=1;
var b=a;
a=2;
//a được tạo ra và lưu vào ô nhớ là 1, giá trị là 1
//b được tạo ra và được lưu vào ô nhớ mới có ô nhớ là 1 và giá trị là 1(vì b=a)
//sau đó a được thay đổi lúc đó ô nhớ được thay đổi là 2 và giá trị là 2
//b vẫn được giữ nguyên vì b được tạo ra ở 1 ô nhớ khác



//reference types(kiểu tham chiếu, kiểu giá trị không nguyên thủy(phức tạp))
/**
 * Object
 * Array
 * Function
 */

//ví dụ
var student = {
    class: '61HT',
    profile: {
        name: 'Ngoc Hiep',
        age: 21,
        address: 'Hung Yen'
    }
}
//Mỗi khi tạo 1 obj( array hay func ) đều tạo ra 1 vùng nhớ
//vùng nhớ đó sẽ được gán cho 1 địa chỉ
//giá trị nhận được là địa chỉ ô nhớ đó

//profile sẽ được tạo 1 vùng nhớ và được gán cho 1 địa chỉ
//student cũng được tạo 1 vùng nhớ và gán cho 1 địa chỉ
//giá trị nhận được là địa chỉ ô nhớ đó và gán cho student

var newAddress = student.profile;
student.profile.address = 'Ha Noi';

console.log(newAddress.address);//output: Ha Noi


//--------------------------------
//data types with function
//-value types
//-reference types

//ví dụ
function createCar(obj){
    //obj được gán với địa chỉ ô nhớ của obj car
    //vì thế khi thay đổi obj thì obj car cũng bị thay đổi
    obj.name = 'Mercedes';
    return obj;
};

//tạo ra 1 ô nhớ gán cho nó 1 địa chỉ và nhận giá trị là địa chỉ ô nhớ đó
const car = {
    name:'BMW'
};

console.log(createCar(car));//output: {name:'Mercedes'}

//ví dụ
function createStudent(obj){
    obj = JSON.parse(JSON.stringify(obj));//lúc này obj được tạo ra một ô nhớ mới

    //dùng địa chỉ ô nhớ mới truy xuất vào ô nhớ mới đó thay đổi value của key
    obj.name = 'Jonhny';
    return obj;
};


const student1 = {
    name:'Hiep'
};

const newStudent = createStudent(student1);
console.log(student1);//output:{name:'Hiep'}
console.log(newStudent);//output:{name:'Jonhny'}