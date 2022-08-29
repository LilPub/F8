//-------------Object trong javascript----------- 
//Tạo obj
var myInfo = {
    name: 'Ngoc Hiep', //Key: Value
    age: 21,
    getAge: function() {
        return this.age;//this là myInfo
    }
}

//Thêm cặp key value mới vào obj
myInfo.email = 'Hiep@123'
console.log(myInfo)

//Xóa cặp key value
delete myInfo.name
console.log(myInfo.getAge())



//----------------object constructor--------------- 
//Tạo Object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Khởi tạo đối tượng
var admin = new User('Ngoc','Hiep','Avt')
var user = new User('A','B','Avt')

//Thuộc tính riêng của đối tượng
admin.title = 'Đây là admin'
user.title = 'Đây là user'


console.log(admin)
console.log(user)


//--------------object prototype-------------- 
//thêm phương thức và thuộc tính qua thằng prototype
User.prototype.clasName = 'F8';
User.prototype.getClasName = function(){
    return this.clasName;
}

console.log(user.getClasName())


//---------------Đối tượng Date-------------------- 
//Khởi tạo đối tượng
var date = new Date();

//Lấy ra các giá trị 
var year = date.getFullYear();

var month = date.getMonth() + 1;// tháng trả về giá trị 0-11 nên phải cộng 1

var day = date.getDate();

console.log(`${day}/${month}/${year}`);



//--------------Math object -------------------
console.log(Math.round(1.7)) //Làm tròn lên hoặc làm tròn xuống

console.log(Math.abs(-5)) //Giá trị tuyệt đối

console.log(Math.ceil(1.1)) //Làm tròn trên

console.log(Math.floor(5.9)) //Làm tròn dưới 

console.log(Math.random()) //Tạo số ngẫu nhiên

console.log(Math.min(1,2,3,4,5,6,7,8,9)) //trả về số nhỏ nhất

console.log(Math.max(1,2,3,4,5,6,7,8,9)) //trả về số lớn nhất

function getRandomItem(arr){
    var random = Math.floor(Math.random()*5);
    return arr[random];
}

var myArr = [1,'b','v',5,7];
var result = getRandomItem(myArr);
console.log(result);