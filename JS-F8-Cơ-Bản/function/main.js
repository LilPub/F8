
// ---------Function----------------
function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");

// message là tham số (parameter)
// "Hi anh em F8!" là đối số (argument)


// ---------Arguments--------------

function testArg(){
    var string = ''
    for (var param of arguments){
        string += `${param} - `
    }
    console.log(string)
}

testArg('log1','log2',3,4,5)

// ------------Return-------------

function testReturn(a,b){
    return a+b;
}

var sum = testReturn(2,8);
console.log(sum);


// -------------Các loại function-------------
/**
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

//1. Declaration function
function declaration(){
    //code
}

//2. Expression function
var expression = function(){
    //code
}

setTimeout(function(){
    //code
}, 1000)

var myObject = {
    myFunc : function(){
        //code
    }
}