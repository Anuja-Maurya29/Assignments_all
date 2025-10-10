/*
2. **Array Loop & Map**
   Write a function that doubles every number in an array using `map` and returns a new array.
*/
let  arr =[2,4,6,8];
let newarray =[];
function doubles(arr){
    
newarray = arr.map((n)=>n*2)
return newarray;
}
console.log(doubles(arr));