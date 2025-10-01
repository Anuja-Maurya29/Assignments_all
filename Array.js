//Array assignment questions
/*filter
From an array of numbers [12, 5, 8, 130, 44], return only the numbers greater than 10.  
From an array of words ["cat", "elephant", "dog", "tiger"], filter out words shorter than 4 letters.*/

let numbers=[12, 5, 8, 130, 44];
console.log(numbers.filter(num => num>10));
let animals=["cat", "elephant", "dog", "tiger"];
console.log(animals.filter(animals=>animals.length>4));

/*
### map
Given [1, 2, 3, 4], create a new array with the squares of each number.  
Convert an array of names ["alice", "bob", "charlie"] into uppercase.

*/
let arr1=[1,2,3,4];
console.log(arr1);
console.log(arr1.map(num=>num*num));
let names=["alice", "bob", "charlie"];
console.log(names);
console.log(names.map(name=>name.toUpperCase()));

/*### reduce
Find the sum of numbers in [3, 7, 2, 9].  
Find the product of all numbers in [2, 3, 4].  
Count how many times each word appears in 
["apple", "banana", "apple", "orange", "banana", "apple"].*/
let sum=[3, 7, 2, 9];
console.log("sum using reduce",sum.reduce((acc,cv)=> acc+cv,0));
let fruitsbasket=["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(fruitsbasket.reduce((acc,cv)=>{
    
}));

/*### slice
From [1,2,3,4,5,6], extract numbers from index 2 to 4.  
Copy the last 3 elements of an array without modifying the original. */
let arr2=[1,2,3,4,5,6];
console.log(arr2.slice(2,5));
let arr3=arr2.slice(3)
console.log(arr3);

/*### splice
From [10,20,30,40,50], remove the element at index 2.  
Insert "hello" and "world" at index 1 of [1,2,3].
*/
let arr4=[10,20,30,40,50];

arr4.splice(2,1);
console.log(arr4);
let arr5=[1,2,3];
arr5.splice(0,1,"hello","world");
console.log(arr5);

/*### shift and unshift
Remove the first element from ["red", "green", "blue"].  
Add "yellow" to the beginning of ["apple", "banana"].
*/
let colors=["red", "green", "blue"];
colors.shift();
console.log(colors);
let fruits=["apple", "banana"];
fruits.unshift("yellow")
console.log(fruits);

/*
### push and pop
Add "grapes" to the end of ["apple", "banana"].  
Remove the last element of ["pen", "pencil", "eraser"].
*/
fruits.push("grapes");
console.log(fruits);
let items=["pen", "pencil", "eraser"];
items.pop();
console.log(items);

/*
### length
Find the length of ["java", "python", "js", "c++"].  
Use .length to get the last element of [100,200,300,400].
*/
let words=["java", "python", "js", "c++"];
console.log(words.length);
let nums=[100,200,300,400];

console.log(nums[nums.length-1]);

/*### indexOf
From ["dog", "cat", "rabbit", "dog"], find the first occurrence index of "dog".  
Check what index "lion" would return in the same array.*/
let pets=["dog", "cat", "rabbit", "dog"];
console.log(pets.indexOf("dog"));
console.log(pets.indexOf("lion"));//-1

/*
### includes
Check if "apple" exists inside ["banana", "mango", "grapes"].  
Check if "zebra" exists inside [1,2,3,4,5].*/
let fav=["banana", "mango", "grapes"];
console.log(fav.includes("apple"));
let arr6=[1,2,3,4,5];
console.log(arr6.includes("zebra"));

/*
### flat
Flatten the array [1, [2, 3], [4, [5, 6]]] just one level deep.  
Fully flatten [1, [2, [3, [4]]]].
*/
let arr7=[1, [2, 3], [4, [5, 6]]];
console.log(arr7);
console.log(arr7.flat().flat());
let arr8=[1, [2, [3, [4]]]];
console.log(arr8.flat().flat().flat());

/*
### sort
Sort [40, 100, 1, 5, 25, 10] in ascending order.  
Sort ["banana", "apple", "cherry"] alphabetically.
*/
let arr9=[40, 100, 1, 5, 25, 10];
console.log(arr9);
console.log(arr9.sort());
let words2=["banana", "apple", "cherry"];
console.log(words2.sort());

/*
### reverse
Reverse [1,2,3,4,5].  
Reverse the characters of "hello" using split, reverse, and join.*/
let rev= [1,2,3,4,5];
console.log(rev.reverse());
let str1 ="hello";
console.log(str1.split("").reverse().join(""));

/*### find
Find the first number greater than 50 in [10, 20, 60, 40, 80].  
Find the first word with more than 5 letters in ["cat", "elephant", "dog"].*/
let arr10=[10, 20, 60, 40, 80];
console.log(arr10.find((num) =>num>50));
let words3=["cat", "elephant", "dog"];
console.log(words3.find((word)=>word.length>5));

/*
### at
Return the last element of [1, 2, 3, 4, 5] using .at().  
Return the second-to-last element using .at().
*/
let arr11=[1, 2, 3, 4, 5];
console.log(arr11.at(-1));
console.log(arr11.at(-2));

/*### has (for Map/Set)
Create a Set with ["apple", "banana", "mango"]. Check if "banana" exists.  
Create a Map with {id:1,name:"Alice"} and check if the key "name" exists.
*/
let set1= new Set("apple", "banana", "mango");
console.log(set1.has("banana"));



/*
##  (Combine Multiple Methods)
Take an array of student marks [45, 67, 89, 34, 56].  
  1. Filter students who scored above 50.  
  2. Sort them in descending order.  
  3. Find the average marks.  */
  let marks=[45, 67, 89, 34, 56];
  let num3=marks.filter((num)=>num>50).toSorted((a,b)=>b-a);
console.log("Average marks:",num3.reduce((acc,cv)=>acc+cv)/num3.length);

/*From a sentence "I love JavaScript arrays so much",  
  1. Convert it to an array of words.  
  2. Reverse the order of words.  
  3. Remove the first word and last word.*/
  let sentence="I love JavaScript arrays so much";

  console.log("Array of Words",sentence.split(" "));
  console.log("REverse order of words",sentence.split(" ").reverse())
  console.log("first and last word remove",sentence.split(" ").slice(1,-1));
  console.log(sentence.split(" ").map((words)=> words.split("").reverse().join("")).join(" "));