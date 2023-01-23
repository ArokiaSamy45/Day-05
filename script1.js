//1.  Print odd numbers in an array
//----------------------------------------------------------------
// Anonymous function
// (function(){
//     var arr = [1,2,3,4,5,6,7,8,9,10];
//     arr.forEach(function(num){
//         if(num%2 !== 0){
//             console.log(num);
//         }
//     });
// })();

// // IIFE
// (function printOddNumbers(){
//     var arr = [1,2,3,4,5,6,7,8,9,10];
//     arr.forEach(function(num){
//         if(num%2 !== 0){
//             console.log(num);
//         }
//     });
// })();
//----------------------------------------------------------------
//2.  Convert all the strings to title caps in a string array
//----------------------------------------------------------------
// Anonymous function
// (function(){
//     var arr = ["hello", "world", "goodbye"];
//     var newArr = arr.map(function(str){
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     });
//     console.log(newArr);
// })();

// // IIFE
// (function titleCaps(){
//     var arr = ["hello", "world", "goodbye"];
//     var newArr = arr.map(function(str){
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     });
//     console.log(newArr);
// })();
//----------------------------------------------------------------
//3.  Sum of all numbers in an array
//----------------------------------------------------------------
// Anonymous function
// (function(){
//     var arr = [1,2,3,4,5,6,7,8,9,10];
//     var sum = arr.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     console.log(sum);
// })();

// IIFE
// (function sumArray(){
//     var arr = [1,2,3,4,5,6,7,8,9,10];
//     var sum = arr.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     console.log(sum);
// })();
//----------------------------------------------------------------
//1.  Return all the palindromes in an array
//----------------------------------------------------------------
// (function() {
//     var array = ["racecar", "hello", "world", "madam", "level"];
//     var palindromes = array.filter(function(word) {
//       return word === word.split("").reverse().join("");
//     });
//     console.log(palindromes);
//   })();
  //----------------------------------------------------------------
  //3.  Remove duplicates from an array
  //----------------------------------------------------------------

//   (function() {
//     var array = [1, 2, 3, 4, 2, 3, 5, 6, 3, 7, 8];
//     var uniqueArray = Array.from(new Set(array));
//     console.log(uniqueArray);
// })();
//----------------------------------------------------------------
//4.  Rotate an array by k times
//----------------------------------------------------------------
// (function() {
//     var array = [1, 2, 3, 4, 5];
//     var k = 2;
//     var rotatedArray = array.slice(k).concat(array.slice(0, k));
//     console.log(rotatedArray);
// })();

