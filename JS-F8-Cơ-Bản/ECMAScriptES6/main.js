//--------------------Let & Const-----------------
//Điểm khác nhau
// 1. var / let, const : Scope(Phạm vi truy cập biến này), hosting
// 2. const/ var, let : Assignment(gán lại giá trị cho biến)

//block
{
    var course = 'JavaScript basic';
    let course2 = 'PHP'
}

//Scope
console.log(course);//oke(phạm vi sử dụng được cả bên ngoài block)
// console.log(course2);//Lỗi(phạm vi sử dụng phải cùng block)



//Hosting(các định nghĩa biến được đưa lên đầu)
a=1;

var a;
console.log(a);//oke vì var được hỗ trợ hosting tương đương: var a;a=1;
//Let và const không được hosting



//Assignment
var a=1;
a=100;
console.log(a);//oke(Gán lại được giá trị)

let b=1;
b=100;
console.log(b);//oke(Gán lại được giá trị)

let c=1;
c=100;
console.log(c);//Lỗi(Không gán lại được giá trị)

//Gán thuộc tính thì oke
//ví dụ
var obj= {
    name: 'Ngọc Hiệp'
}

obj.name = 'Jonhny';
console.log(obj.name);//Thỏa mãn vì đây là gán lại giá trị thuộc tính 
//không phải gán lại giá trị cho biến


//-----------------------Template Literals-----------------------
//Template string
var course = 'JavaScript';
var course2 = 'PHP';
var nameCourses = `Name courses: ${course}, ${course2} , đây là Template string nội suy \${}`;// sử dụng \ để có thể biến ký tư thành string
console.log(nameCourses);


//-----------------------Multi-line String-----------------------
//Thông thường để xuống dòng ta dùng \n
var lines = 'line1\nline2';
console.log(lines);
//dùng Template string
var liness = `line1
line2
line3`;
console.log(liness);


//-----------------------Arrow function-----------------------
//thông thường 
const sum = function(a,b){
    return a+b;
}
console.log(sum(2,3));

//sử dụng arrow function
const sum1 = (a,b) => {
    return a+b;
}
console.log(sum1(3,4));

//Ngắn hơn nữa
const sum2 = (a,b) => a+b;
console.log(sum2(4,5));
//Lưu ý đằng sau khác dấu ngoặc {} nó mới return
// const obj = (a,b) => {a:a , b:b};//Lỗi
//tuy nhiên muốn trả ra obj ta làm như sau(thêm ngoặc () )
const obj1 = (a,b) => ({a:a , b:b})//oke
console.log(obj1('Hiep',21));

// //arrow function không có context
// const obj3 = {
//     name: 'Hiep',
//     getName: () => {
//         return this.name; //Lỗi vì không có context nên this không trỏ được
//     }
// }

// const Courses = (name,price) => {
//     this.name = name;//Lỗi vì không có context nên this không trỏ được
//     this.price = price;//Lỗi vì không có context nên this không trỏ được
// }

// var objCourse = new Courses('PHP',2000);
// console.log(objCourse);



//-----------------------Classes--------------------------
//- nó cũng khá tương tự constructor function
// function Courses(name,price) {
//     this.name = name;
//     this.price = price;
// }

class Courses{
    //nó có constructor
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    //Định nghĩa phương thức
    getName() { return this.name; }

    getPrice() { return this.price; }
}
var couse = new Courses('PHP',2001);
console.log(couse);
console.log(couse.getName());



//---------------------Default parameter values--------------------
function logger(log = 'Định nghĩa giá trị mặc định'){
    console.log(log);
}

logger();//trả về: Định nghĩa giá trị mặc định
logger('Đây là giá trị tôi truyền')//trả về: Đây là giá trị tôi truyền



//-----------------------Enhanced object literals--------------------
//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var name = 'Hiep';
var age = 21;

// đây là object literals
var newObj = { 
    name,
    age,
    getName(){ return name; }
}

//định nghĩa key cho object dưới dạng biến
var filedname = 'name.txt';
var fieldage = 'age';
const Person = {
    [filedname]: 'Hiep',
    [fieldage]: 21
}



//----------------------Destructuring, Rest-----------------------
//-Phân rã
//ví dụ với array
var Arr = ['JavaScript','PHP','Ruby']; 
//lấy ra 3 phần tử trong arr
var [arr1, arr2, arr3] = Arr;
console.log(arr1, arr2, arr3);

var [arr1, , arr3]  = Arr;
console.log(arr1, arr3);
//ví dụ object
var obj_1 = {
    name: 'Hiep',
    age: 21,
    address: 'Hung Yen',
    objChild: {
        name: 'Johnny'
    }
};
var {name, age, address} = obj_1; //Lấy key đúng với key của obj
console.log(name, age, address);

var {name: parentName/**Đổi tên sau khi lấy */, objChild:{name}/**Lấy ra con của objChild */} = obj_1;
console.log(parentName,name);

//Rest: Lấy ra những phần còn lại
//Array
var [arr1, ...rest] = Arr;
console.log(arr1);//Lấy ra thằng đã chọn là arr1
console.log(rest)//Lấy ra những thằng còn lại
//Object
var {name, ...newObject} = obj_1;
console.log(name);
console.log(newObject);
// function
function testRest(...rest){
    console.log(rest);//trả về dạng mảng
}

testRest(1,2,3,4,5,6,7,8);

function testRestObj({name,...rest}){
    console.log(name);
    console.log(rest);
}

testRestObj({
    name: 'Hiep',
    age: 21,
    address: 'Hung Yen'
})



//---------------------Spread---------------------------
//cũng là ... nhưng khác rest
// dải ... trước array sẽ bỏ đi dấu []
// dải ... trước object sẽ bỏ đi dấu {}
//với array
var array1 = ['JS','PHP','Ruby'];
var array2 = ['ReactJS','NodeJS'];
var array3 = [...array2,...array1];//nối 2 mảng array1 và array2, array 2 đặt trước
console.log(array3);
//với Object
var object1 = {
    name: 'ReactJS'
};

var object2 = {
    price: 2000
};

var object3 = {...object1,...object2,size: 1000};
//Hợp nhất 2 object1 và object2 và thêm size của object3
console.log(object3);




//------------------------Tagged template literals------------------------
var course = 'JavaScript';
var brand = 'F8'

function textFinish([first,...string],...values) {
    return values.reduce(
        (acc,curr) => [...acc,`<span>${curr}</span>`,string.shift()], [first]
    )

}

var finish = textFinish`Học lập trình ${course} tại ${brand}!`;
console.log(finish.join(''));



//------------------------Modules--------------------------
//import để sử dụng
//export kiểu như được định nghĩa
import loggerTest/**từ export default */, 
{TYPE_ERROR , TYPE_WARN, TYPE_LOG} /**dùng Destructuring (export thường)*/
from './logger.js';

loggerTest('Hello các bạn nhé',TYPE_ERROR)




//---------------------Optional chaining (?.)---------------------------
//nghi ngờ 1 thằng nào đó không tồn tại thì sử dụng ?.


//thông thường
const objAnimal = {
    name: 'Alice',
    cat: {
        name:'Dinah'
    }
}

console.log(objAnimal.cat.name);
//trường hợp sử dụng ?.

const objAnimal1 = {
    name: 'Alice',
    cat: {
        name:'Dinah',
        cat1: {
            name:'Dinah1',
            cat2: {
                name:'Dinah2',
                cat3: {
                    name:'Dinah3'
                }
            }
        }
    }
}

if(objAnimal1.cat?.cat1?.cat2?.cat3/**nghi ngờ thằng cat,cat1,cat2,cat3 không tồn tại */){
    console.log(objAnimal1.cat.cat1.cat2.cat3.name)
}

const propsss = {
    href: 'href1',
    onclick: 'Object'
}
