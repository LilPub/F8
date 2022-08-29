//--------------Vòng Lặp---------------
/**
 * 1.For : Lặp với điều kiện đúng
 * 2.For/in : Lặp qua key đối tượng
 * 3.For/of : Lặp qua value đối tượng
 * 4.While : Lặp khi điều kiện đúng
 * 5.do/while : Lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đúng
 */

//For
for (var i=0; i<1000; i++){
    console.log(i);
}


//For/in
var myInfo = {
    name: 'Ngoc Hiep',
    age: 21
}

for(var key in myInfo){
    console.log(key); //Lấy ra các key
    console.log(myInfo[key]); //Lấy ra value của key
}


//For/of
var myArr = ['PHP','Ruby','JS']
for(value of myArr){
    console.log(value);  // lấy ra các value
}
//Dùng với obj thì phải dùng cách sau:
var myInfo = {
    name: 'Ngoc Hiep',
    age: 21
}

for(value of Object.keys(myInfo)){
    console.log(value);  // lấy ra các key của obj
}

for(value of Object.values(myInfo)){
    console.log(value);  // lấy ra các value của obj
}

//Ví dụ 
arr = ['a','b','c','a','b','c']

console.log([...new Set(arr)]) 
