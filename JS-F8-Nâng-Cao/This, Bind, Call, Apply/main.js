//------------------------THIS----------------------------
//Hầu hết các trường hợp sử dụng từ khóa this
//từ khóa this nó sẽ trỏ về cái đối tượng nó đang thuộc về
const obj = {
    name: 'object',
    age: 30,

    takeObj(){
        console.log(this);
        //this ở đây là nó trỏ về đối tượng là obj(vì nó đang thuộc về obj)
    },

    objChild: {
        name:'object child',
        methodChild(){
            console.log(this);
            //this ở đây là nó trỏ về đối tượng là objChild(vì nó đang thuộc về objChild)
        }
    }
}

obj.takeObj();//đối tượng trước dấu . là obj nên this là obj
obj.objChild.methodChild();
//- Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức
//(đối tượng trước dấu .)
//- Đứng ngoài phương thức, this tham chiếu tới đối tượng globel

//-----------------------
//this trong hàm tạo là đại diện đối tượng hàm tạo
function car(name,color,weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function(){
        console.log(this);
    };
}

//this trong hàm tạo là đại diện đối tượng hàm tạo
const mercedes = new car('Mercedes','black',1200);
//this trong hàm tạo là đại diện cho mercedes
console.log(mercedes.run());




// //-----------------------Bind---------------------------
// this.firstName = 'Ngoc';
// this.lastName = 'Hiep';

// const teacher = {
//     firstName: 'Jonhny',
//     lastName: 'Tran',
//     getFullName: function(data1,data2) {
//         //Có thể nhận được các đối số như hàm ban đầu
//         console.log(data1,data2);
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //case 1
// console.log(teacher.getFullName());//"Jonhny Tran"
// //this trong trường hợp này là teacher

// //case 2
// const getTeacher = teacher.getFullName;//(chưa gọi hàm mà chỉ mới truy cập func)
// //Gán cho getTeacher = func dó
// console.log(getTeacher());//"Ngoc Hiep"
// //gọi hàm không thông qua đối tượng(hay không có dấu chấm đằng trước)
// //lúc đó this nó trỏ ra globel
// //vì thế this trong trường hợp này là windows

// //khi sử dụng bind
// const getTeacher1 = teacher.getFullName.bind(teacher);
// //ràng buộc getFullName với đối tượng teacher(ràng buộc getTeacher1 thành đồi tượng khác)
// //lúc này this là teacher
// console.log(getTeacher1());

// const student = {
//     firstName: 'Ronaldo',
//     lastName: 'Tran',
// }

// const getTeacher2 = teacher.getFullName.bind(student);
// //ràng buộc getFullName với đối tượng student(ràng buộc getTeacher2 thành đồi tượng khác)
// //lúc này this là student
// console.log(getTeacher2('log1','log2'));
// //Có thể nhận được các đối số như hàm ban đầu


// /**
//  * Phương thức bind() trả về 1 hàm mới
//  * Có thể nhận được các đối số như hàm ban đầu
//  */

// // //ví dụ bind
// // const button = document.querySelector('button');
// // //thông thường
// // button.onclick = function(){
// //     teacher.getFullName();
// // }
// // //với bind
// // button.onclick = teacher.getFullName.bind(teacher);
// // //ràng buộc đối tượng là teacher
// // //nếu không nó sẽ hiểu đối tượng là button




//------------------------Call---------------------------
//- Là phương thức trong prototype của function constructor, phương thức này
//được dùng để gọi hàm và cũng có thể bind this cho hàm
//- Gọi hàm bind this, lưu ý trong strict mode vẫn có this nếu được bind(
//vì trong trict mode không bind this, this sẽ là undefined chứ k phải windows)
//- Thể hiện tính kế thừa trong OOP

const teacher = {
    firstName:'John',
    lastName:'Smith',
}

const me = {
    firstName: 'Tran',
    lastName: 'Hiep',
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName();//lúc này this sẽ là me

me.showFullName.call();//lúc này this sẽ là windows
//để khắc phục ta làm như sau(giống như bind, call có thể bind this)
me.showFullName.call(me);//Tran Hiep
me.showFullName.call(teacher);//John Smith


//- Thể hiện tính kế thừa trong OOP
function Annimal(name, weight){
    this.name = name;
    this.weight = weight;
}

function Snake(name, weight, legs){
    Annimal.call(this, name, weight)
    //gọi Annimal bind this(this trong trường hợp này sẽ là 'hiep')
    //và kế thừa lại argument(name, weight) của Annimal 

    this.legs = legs;
}

const hiep = new Snake('Hiep', 55, 2);
console.log(hiep);

//ví dụ
const person = {
    name: 'John',
    age: 34
}

function sayHello(get1, get2) {
    console.log(`${get1}, ${get2} ${this.name}, age: ${this.age}`);
}

sayHello.call(person, 'Hello', 'Good Morning');
//bind this là person cho func sayHello
//truyền thêm 2 đối số vào func sayHello khi call
//sayHello nhận được 2 tham số get1, get2 là đối số truyền vào khi gọi hàm




//-----------------------Apply-----------------------
//cách hoạt dộng tương tự như call(tính kế thừa , ...)
//nhưng cách nhận đối số khác với Call
//đối số nhận được là array

const isTeacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

function helloTeacher(get1, get2) {
    console.log(`${get1}, ${this.firstName} ${this.lastName}, ${get2}`);
}

helloTeacher.apply(isTeacher, ['Hello','Bạn đến từ đâu?']);
//bind this của isTeacher vào func helloTeacher
//nhưng đối số truyền vào là một array
//tham số nhận được là các phần tử của array

//- Thể hiện tính kế thừa trong OOP
function Annimal(name, weight){
    this.name = name;
    this.weight = weight;
}

function Parrot(name, weight){
    Annimal.apply(this, [name, weight])
    //có thể viết cách khác như sau
    //function Parrot(){
        // Annimal.apply(this, argument)
    //}
    this.speak = function(){
        console.log('Nhà có khách!');
    }
}

const conVet = new Parrot('Vẹt', 10);
console.log(conVet);
