// //----------------------Json-----------------
// //- là một định dạng dữ liệu (chuỗi)
// //- viết tắt của javascript object notation
// //- json  thể hiện dang dữ liệu number, string, boolean, null, array, object
// //Stringify: từ JavaScript types -> JSON
// //Parse: từ JSON -> JavaScript types

// var json = '20'; //dạng dữ liệu number
// var json = '"Hiep"'; //dạng dữ liệu string
// var json = 'true'; //dạng dữ liệu boolean
// var json = 'null'; //dạng dữ liệu null
// var json = '["JavaScript" , "PHP"]'; //dạng dữ liệu array
// var json = '{"name":"Tran Hiep" , "age":21}'; //dạng dữ liệu object


// //chuyển chuỗi json -> javascript
// console.log(JSON.parse(json));



// //----------------Promise(Sync, Async)--------------------
// //- Sync(đồng bộ, diễn ra tuần tự)
// //- Async(bất đồng bộ, diễn ra không tuần tự)
// //để xử lý việc bất đồng bộ ta sử dụng callback
// setTimeout(function(){
//     console.log("1");//việc 1
//     setTimeout(function(){
//         console.log("2");//việc 2
//         setTimeout(function(){
//             console.log("3");//việc 3
//             setTimeout(function(){
//                 console.log("4");//việc 4
//             },1000)
//         },1000)
//     },1000)
// },1000)
// //tuy vậy ta sẽ bị dơi vào tình trạng là callback hell
// //và để xử lý callback hell ta lại sử dụng promise

// //khởi tạo promise
// var promise = new Promise(
//     //Executor
//     function(resolve, reject){
//         //logic
//         //Thành công: resolve()
//         //Thất bại: reject()
//         resolve([{name: 'Ngoc Hiep'}]);
//         // reject('có lỗi !!!');
//     }
// );

// //xử dụng Promise
// promise
//     //các phương thức hay được sử dụng
//     //được thực thi khi resolve được gọi
//     .then(function(obj){
//         console.log(obj);//nhận được giá trị từ việc resolve được gọi và có giá trị truyền vào
//         console.log('Successfully!');
//     })
//     //được thực thi khi reject được gọi
//     .catch(function(){
//         console.log('Fail!');
//     })
//     //được thực thi khi resolve hoặc reject được gọi
//     .finally(function(){
//         console.log('Done!');
//     })

// promise
//     //có thể gọi đến nhiều .then và nó sẽ được thực hiện lần lượt
//     //Kết quả trả về của thằng trước là tham số đầu vào của thằng sau
//     .then(function(){
//         return 1;
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//         return 3;
//     })
//     .then(function(data){
//         console.log(data);
//     })


// //ví dụ 
// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(function(data){
//         console.log('1');
//         return sleep(1000);
//     })
//     .then(function(data){
//         console.log('2');
//         return sleep(1000);
//     })
//     .then(function(data){
//         console.log('3');
//         return new Promise(function(resolve,reject){
//             reject('Có lỗi');
//         })
//     })
//     .then(function(data){
//         console.log('4');
//     })
//     .catch(function(err){
//         console.log(err);
//     })


// //1.Promise.resolve: trạng thái promise luôn luôn thành công
// var promise = Promise.resolve('Succses!');
// promise
//     .then(function(data){
//         console.log(data);
//     })
// //2.Promise.reject: trạng thái promise luôn luôn thất bại
// //3.Promise.all: chạy đồng thời cùng lúc(chỉ cần 1 thằng reject là nó sẽ rơi vào thằng catch)
// var promise1 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1])
//     },2000)
// })

// // var promiseErr = Promise.reject('Có lỗi');

// var promise2 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([2,3])
//     },5000)
// })

// Promise.all([promise1,promise2])
//     .then(function(result){
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//     })

//     .catch(function(err){
//         console.log(err);
//     })



//------------------Promise example--------------------
var users = [
    {
        id: 1,
        name: 'Hiep Tran'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
];

var comments = [
    {
        id: 1,
        userID: 1,
        comment: 'Hay quá anh ơi'
    },
    {
        id: 2,
        userID: 2,
        comment: 'Cảm ơn e zai!!!'
    },
    {
        id: 3,
        userID: 1,
        comment: 'Ổn mà a :)))'
    }
];

function getComment() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
        },1000)
    })
}

function getUser(idUser){
    return new Promise(function(resolve){
        var getIdUser = users.filter(function(user){
            return idUser.includes(user.id);
        })
        setTimeout(function(){
            resolve(getIdUser);
        },1000)
    })
}

getComment()
    .then(function(comments) {
        var IdUser = comments.map(function(comment) {
            return(comment.userID);
        })
        
        return getUser(IdUser)
            .then(function(user) {
                return {
                    users: user,
                    comments: comments
                };
        })
    })
    .then(function(data) {
        var showComment = document.querySelector('.comments-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var getUser = data.users.find(function(user) {
                return user.id === comment.userID;
            })
            html += `<li>${getUser.name}: ${comment.comment}</li>`;
        })
        showComment.innerHTML = html;
    })




//-------------------Petch-----------------------
var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function (response) {
        return response.json();// làm việc JSON.parse: JSON->Javascript
    })
    .then(function (posts) {
        //thu được mảng dữ liệu posts và sử dụng
        var html = posts.map(function (post) {
            return `
            <li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>
            `
        })

        document.querySelector('.posts-block').innerHTML = html.join('');
    })




//------------------JSON server-------------------
