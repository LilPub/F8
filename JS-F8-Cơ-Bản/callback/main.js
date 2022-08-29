// Callback ?
// Là hàm (function) được truyền qua đối số khi gọi hàm khác
// 1.Là hàm
// 2. Được truyền qua đối số

function myFunction(Callback){
    if(typeof Callback === 'function'){
        Callback('Đây là callback');
    }
}

function myCallback(value){
    console.log('value : ', value);
}

myFunction(myCallback);


//Callback - Phần 2 ?

Array.prototype.myMap = function(cb) {
    var ouput = [];
    for (var i=0; i<this.length; i++){
        var result = cb(this[i],i);
        ouput.push(result);
    }    
    return ouput;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]