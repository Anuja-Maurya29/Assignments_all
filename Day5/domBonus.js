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
 const textarea = document.getElementById("textarea");
 const count =document.getElementById("count");
 let wordCount=0;
 let maxchar =100;
 textarea.addEventListener("input",(event)=>{
    const text = textarea.value.trim();
    if(text!==" ")
    {
        wordCount=text.length;
    }
    count.innerText = maxchar-wordCount;
 if(count.innerText<0){
    textarea.style.color="red";
    count.innerText=0
    
 }
 });

 /*
### **3. Image Slideshow with Timer**

* Add an `<img>` tag and a few images in an array.
* On page load:

  * Automatically change the image every **3 seconds** using `setInterval`.
* Add **"Next"** and **"Previous"** buttons to manually switch images.
*/
 const images=["https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg",
    "https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg","https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg","https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg",
 ];
let index= 0;
 let slideshow;
window.onload = function(){
     slideshow =document.getElementById("slideshow");
slideshow.src =images[index];

 const next =document.getElementById("next");
const prev =document.getElementById("prev");
next.addEventListener("click",(event)=>{
    index++;
    if(index>images.length-1){
        index =0;
    }
    slideshow.src = images[index];
})

prev.addEventListener("click",(event)=>{
    index--;
    if(index<0){
        index=images.length-1
    }
    slideshow.src=images[index];
})
slideshow.addEventListener(~)

};
