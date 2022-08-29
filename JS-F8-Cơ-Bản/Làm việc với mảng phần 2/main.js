//--------------Làm việc với mảng phần 2---------------- 
/**
 * Array methods:
 *  ForEach()
 *  every()
 *  some()
 *  find()
 *  filter()
 *  map()
 *  reduce()
 */

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 100
    },
    {
        id: 2,
        name: 'PHP',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 300
    },
    {
        id: 4,
        name: 'NodeJS',
        coin: 400
    }
    ,{
        id: 5,
        name: 'ReactJS',
        coin: 0
    },{
        id: 6,
        name: 'ReactJS',
        coin: 100
    }
]

//ForEach: duyệt qua các phần tử của mảng
courses.forEach(function(course,index){
    console.log(index, course); 
})


//every: duyệt qua các phần tử của mảng, kết quả trả ra là kiểu boolearn
var isFree = courses.every(function(course,index){
    return course.coin === 0; //kiểm tra xem khóa học có miễn phí không(chỉ cần 1 thằng không đạt điều kiện thì là sai)
})
console.log(isFree);


//some: duyệt qua các phần tử của mảng, kết quả trả ra là kiểu boolearn
var isFree = courses.some(function(course,index){
    return course.coin === 0; //kiểm tra xem khóa học có miễn phí không(chỉ cần 1 thằng đạt điều kiện thì là đúng)
})
console.log(isFree);


//find: duyệt qua các phần tử của mảng, 
//Kết quả trả ra nếu điều kiện đúng là chính phần tử đó của mảng
//Kết quả trả ra nếu điều kiện sai là undefined
//Trả về 1 phần tử thỏa mãn
var course = courses.find(function(course,index){
    return course.name === 'JS';
})
console.log(course);

//filter: duyệt qua các phần tử của mảng, 
//Kết quả trả ra nếu điều kiện đúng là chính phần tử đó của mảng
//Kết quả trả ra nếu điều kiện sai là undefined
//Trả về nhiều phần tử thỏa mãn
var course = courses.filter(function(course,index){
    return course.name === 'ReactJS';
})
console.log(course);


//Map: Thay đổi element của một array
//Có 3 tham số là item, index và originArray:là mảng cũ
var newCourse = courses.map(function(course,index,originArray) {
    return {
        id: course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        title: `Khóa học ${course.coin} $`,
        originArray: originArray
    }
})
console.log(newCourse);


//reduce:
// có tham số đầu tiên bà biến tích chữ được cộng dồn
// tham số tiếp theo sẽ là giá trị hiện tại của phần tử khi lặp qua
var totalCoin = courses.reduce(function (coin/**biến tích chữ */,currentCoin/**Giá trị hiện tại */){
    return coin + currentCoin.coin;
},0)

console.log(totalCoin)

//Làm phẳng mảng
var array = [1,2,[3,4],5,6,[7,8,9]];
var ouput = array.reduce(function(arrOutput,arrNumber){
    return arrOutput.concat(arrNumber);
},[]);
console.log(ouput);



//ví dụ: hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(arr){
    var newArr = arr.filter(function(arr){
      return arr.Director === "Christopher Nolan";
    })
    
    var sumIMDB = newArr.reduce(function(total,poin){
      return total + parseFloat(poin.imdbRating)
    },0)
  
    return sumIMDB/newArr.length
  }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  