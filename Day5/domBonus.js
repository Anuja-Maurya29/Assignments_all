/*
## Bonus Questions 

### **1. Toggle Theme**

<button id="themeToggle">Toggle Theme</button>
<p id="pageBody">Hello, WIP!</p>
**Task:**
* On button click, toggle the background color of the page between `"white"` and `"black"`, and text color between `"black"` and `"white"`.
* content inside body should be `"center-aligned"`, center of the screen.*/
const btn=document.getElementById("themeToggle");
const body =document.getElementById("pageBody");
btn.addEventListener("click",()=>{
console.log(body.style.backgroundColor);
    if(body.style.backgroundColor ==="white"){
        body.style.backgroundColor="black";
        body.style.color="white";
    }
    else{
        body.style.backgroundColor="white";
           body.style.color="black";
    }

})
/*
### **2. Character Counter**

* Create a `<textarea>` for user input.
* Below it, display: **"Characters left: 100"**.
* As the user types:

  * Update the remaining count (100 – length of input).
  * Turn the count red if it goes below 0.*/
 let wordCount=0;
 function counter(){
    const textarea = document.getElementById("textarea");
    wordCount++;
    console.log(wordCount);
 }