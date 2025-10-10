/*
4. **DOM Manipulation**
   Select a button `#changeColor` and a div `#box`.
   When the button is clicked, change the div’s background color to blue.
*/
const divBox = document.getElementById("box");
const btn = document.getElementById("color");

btn.addEventListener("click",()=>{
   divBox.style.backgroundColor="blue";
})