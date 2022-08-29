// // HTML DOM là tiêu chuẩn của W3C đề ra
// // Có 3 thành phần
// /**
//  * 1. element
//  * 2. attribute
//  * 3. text
//  */
// //-------------------------------------


// //javascript
// //HTML DOM không phải là của JS mà JS cung cấp một
// //vài phương thức để truy xuất HTML DOM


// //Get element: ID, Class, tag name, CSS selector, HTML collection.
// //ID
// document.getElementById('header');//lấy ra element có id là header
// //Class
// document.getElementsByClassName('footer');//lấy ra element có class là footer
// //tag name
// document.getElementsByTagName('h1');//lấy ra element có tag name là h1
// //CSS selector
// document.querySelector('.header');//lấy ra element có CSS là .header, trả ra 1 phần tử

// document.querySelectorAll('.header')//lấy ra element có CSS là .header, trả ra nhiều phần tử


// //---------------------DOM attributes--------------------
// var h1Element = document.querySelector('h1');
// console.log(h1Element);

// //add title
// h1Element.title = 'heading'

// //add id
// h1Element.id = 'heading'

// //add class
// h1Element.className = 'heading'

// //set attribute theo mình đặt ra
// h1Element.setAttribute('Sumoz'/**Tên attribute */,'heading'/**Giá trị attribute */)

// //lấy ra value của attribute
// console.log(h1Element.getAttribute('class'))//lấy ra value của class
// //với các attribute hợp lệ của element có thể lấy value như sau:
// console.log(h1Element.className);
// console.log(h1Element.title);


// //-------------------------Text Node ------------------------
// //innerText: trả ra text node người dùng thấy nó hiển thị
// //textContent: trả ra cả text node là khoảng trắng và chữ, các đoạn mã ở trong DOM

// console.log(h1Element.innerText);//lấy ra nội dung text Node của element
// console.log(h1Element.textContent);//lấy ra nội dung text Node của element

// //Gán cho element 1 nội dung mới
// h1Element.innerText = 'New Text';



// //--------------innerHTML,outerHTML-----------------
// //Thêm element node
// h1Element.innerHTML = '<i title="text">new text</i>';//Ghi đè thằng con của thằng element đang gọi đến
// h1Element.outerHTML = '<i title="text">new text</i>';//Ghi đè chính nó

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var newCourses = courses.map(function (course) {
//         return `
//         <li>${course}</li>
//         `
//     })

//     return (newCourses.join(''));
// }

// console.log(render(courses))



// //---------------------Node properties--------------------------

// //----------------------DOM CSS-----------------------
// //DOM style: set style cho element
// var boxElement = document.querySelector('.box');
// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'green';
// boxElement.style.display = 'flex';
// boxElement.style.justifyContent = 'center';
// boxElement.style.alignItems = 'center';
// boxElement.style.color = 'white';
// boxElement.style.fontWeight = '600'
// //Cách viết ngắn gọn hơn
// Object.assign(boxElement.style, {
//     width : '100px',
//     height : '100px',
//     backgroundColor : 'green',
//     display : 'flex',
//     justifyContent : 'center',
//     alignItems : 'center',
//     color : 'white',
//     fontWeight : '600'
// })


// //-----------------------Classlist property--------------------------
// //add: thêm class
// //contains: kiểm tra xem có class trong element k
// //remove: xóa bỏ class khỏi element
// //toggle: nếu có class đó trong element thì sẽ xóa class đó đi, 
// //còn không có class đó trong element thì thêm vào

// var boxElement = document.querySelector('.Class');
// boxElement.classList.add('green');//thêm 1 class
// boxElement.classList.add('green','yellow');//Thêm nhiều class

// //Kiểm tra sự tồn tại của class
// console.log(boxElement.classList.contains('green'));



//-----------------------DOM events------------------------
//1.Attribute events
//2.Assign event using the element node
//Các DOM events có thể tìm kiếm trên w3(onclick,onchange,onkeyup,...)
var h1Element = document.querySelectorAll('h1');
for(var i=0; i<h1Element.length; i++){
    h1Element[i].onclick = function(e/**Mouse event */){
        // console.log(e.target);//trả lại chính element đang lắng nghe
        e.target.classList.toggle('green');
    }
}


//1.preventDefault: loại bỏ hành vi mặc định trên trình duyệt của 1 thẻ html
var aElement = document.querySelectorAll('a');
for(var i=0; i<aElement.length; i++) {
    aElement[i].onclick = function(e){
        //Nếu href là https://f8.edu.vn thì cho chuyển trang còn không thì không chuyển
        //Cách 1
        if(e.target.href === 'https://www.facebook.com/'){
            e.preventDefault();
        }

        //Cách 2
        if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}


//2.stopPropagation: loại bỏ sự kiện nổi bọt
var divElement = document.querySelector('div');
divElement.onclick = function(e) {
    console.log('Div');
}

var buttonElement = document.querySelector('button');
buttonElement.onclick = function(e) {
    e.stopPropagation();//Ngăn chặn sự kiện nổi bọt(chỉ thằng con thực hiện, k lan ra thằng cha)
    console.log('Click me!');
}



// //--------------Event listener------------------------
var btn = document.querySelector('button');

//add event listener
btn.addEventListener('click', function(e){
    console.log('event 1')
})

btn.addEventListener('click', function(e){
    console.log('event 2')
})

btn.addEventListener('click', function(e){
    console.log('event 3')
})

function viec1(){
    console.log(' viec 1 ');
}

btn.addEventListener('click',viec1);

//remove event listener
btn.removeEventListener('click',viec1);