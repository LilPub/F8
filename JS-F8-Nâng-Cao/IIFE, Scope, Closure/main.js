//----------------------------IIFE---------------------------
//- viết tắt của từ Immediately Invoked Function Expression
//- 1 biểu thức tạo một hàm và được gọi ngay lập tức
//- trước IIFE pahir có ;

//------------------
//IIFE
(function(){
    console.log("NOW NOW");
})();

(function(message) {
    console.log("message: ", message);
})("Chào bạn!!!");

//-----------------
//IIFE là hàm "private"
// (function myFunc(){
//     console.log("Func");
// })();

// myFunc();// Lỗi không tồn tại func (vì IIFE là hàm "private")

(function myFunc(i){
    i++;
    console.log(i);

    if(i<5){
        myFunc(i);//trong phạm vi thì oke 
    }
})(0);

(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)




//-------------------------Scope--------------------------
//- phạm vi
//- Các loại phạm vi
// + Globel : toàn cầu
// + Code block: khối mã let, const
// + Local scope: Hàm: var, function


// GLOBAL
var GLOBAL = 'Đây là biến Globel';//let và const cũng oke

function GLOBALFUNC() {
    console.log("Hàm này cũng được gọi toàn cầu");
}

GLOBALFUNC();

//CODE BLOCK(let & const)
{
    const nameBlock = "Hiep";//let cũng tương tự
    console.log(nameBlock);//oke
}
// console.log(nameBlock);//không được(dính lỗi vì nameBlock chỉ sử dụng trong khối không như biến Globel)

//LOCAL SCOPE
function logger(){
    var course = 'PHP';
    console.log(course);//oke
}

logger();

// console.log(course);//lỗi 

//Mỗi khi gọi hàm sẽ có 1 phạm vi mới được tạo
function course(course){
    console.log(course);//oke
}

course('JS');//Phạm vi 1 được tạo(khác phạm vi 2,3)
course('PHP');//Phạm vi 2 được tạo(khác phạm vi 1,3)
course('Ruby');//Phạm vi 3 được tạo(khác phạm vi 1,2)


//Khi nào một biến bị xóa khỏi bộ nhớ
//GLOBAL: khi reload lại trang hoặc tắt tab đó đi
//CODE BLOCK: khi ra khỏi block đó 



//-------------------------Closure-------------------------
//- tính khép kín , tính bao đóng
//- là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được biến ở
//- bên ngoài phạm vi của nó 

//ví dụ

function makeCounter(){
    let count = 0;

    function counter() {
        return ++count;
    }

    return counter;
}

const testCounter = makeCounter();//tạo ra được 1 môi trường khi gọi makeCounter

console.log(testCounter());//tạo ra 1 môi trường nằm trong môi trg của makeCounter
console.log(testCounter());//tạo ra 1 môi trường nằm trong môi trg của makeCounter
console.log(testCounter());//tạo ra 1 môi trường nằm trong môi trg của makeCounter
//khi testCounter được gọi là việc gọi counter()
//và môi trường đó nằm trong môi trường của makeCounter 
//khi trong counter() không có count nó trỏ ra bên ngoài và tìm thấy count
//trong môi trường makeCounter đấy biến count vẫn được lưu giá trị khi counter
//được gọi là tăng biến count
//những lần gọi testCounter tiếp theo nó trỏ ra giá trị count ngoài môi trg 
//của makeCounter và nhận được giá trị count của lần trước và cộng tiếp lên
// => kết quả trả ra 1  2  3


//---------Ứng dụng closure
function createLogger(namespace){
    function Logger(message) {
        console.log(`[${namespace}] ${message}`);
    }

    return Logger;
}

//register.js(môi trường đăng ký, trả ra nhiều log)
var infoLogger = createLogger('info');

infoLogger('Bắt đầu đăng ký tài khoản');
infoLogger('Gửi mail thất bại, thử lại');
infoLogger('Đăng ký thành công');


//updateInfo.js(mội trường thay đổi thông tin, trả ra nhiều log)

var updateInfo = createLogger('update');

updateInfo('Thay đổi thất bại, vui lòng thử lại');
updateInfo('Thay đổi thành côgn')


//ví dụ thêm
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}; //?? là kiểm tra nếu là null hoặc undifine thì trả ra vế sau ??

    function save() {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key];
        },
        set(key, value){
            store[key] = value;
            save();
        },
        remove(key){
            delete store[key];
            save();
        }
    };

    return storage;
}

const infoSettings = createStorage('infoSettings');

infoSettings.set('name','Ngoc Hiep');
infoSettings.set('age',21);
infoSettings.set('address','Hung Yen');

console.log(infoSettings.get('age'));




