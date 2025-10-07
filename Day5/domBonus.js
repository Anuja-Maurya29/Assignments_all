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
const x =document.getElementById("x");
const y =document.getElementById("y");
this.document.addEventListener("mousemove",()=>{
    x.innerText= this.event.clientX;
    y.innerText=this.event.clientY;

})
}
/*
### **4. Auto-Hide Notification**

* Create a button: **"Show Notification"**.
* On click:

  * Show a notification `<div>` with the message **"This is a notification"**.
  * After **5 seconds**, hide the notification automatically using `setTimeout`.*/
 const notification =document.getElementById("notification");
 const notify =document.getElementById("notify");
notification.addEventListener("click",(event)=>{
    notify.innerText="This is a notification";
})
setTimeout(()=>{
    notify.innerText="";
},5000);

/*### **5. Stopwatch**

* Add three buttons: **Start, Stop, Reset**.
* Display a timer (`00:00:00` format).
* Functionality:

  * **Start** → begins counting every second.
  * **Stop** → pauses the timer.
  * **Reset** → sets time back to `00:00:00`.*/

/*

### **6. Click Counter with Reset**

* Show a number starting at `0`.
* Each time a button is clicked, increase the number by 1.
* After **10 seconds**, automatically reset the counter to 0.*/
const counter =document.getElementById("counter");
const start =document.getElementById("start");
start.addEventListener("click",()=>{
    counter.innerText=+counter.innerText+1;
    setTimeout(()=>{
counter.innerText=0;
},3000)
})

/*
### **7. Mouse Tracker**

* Display the current mouse `X` and `Y` position inside a `<div>`.
* Update the values in real-time as the user moves the mouse.*/
const x =document.getElementById("x");
const y =document.getElementById("y");

/*### **8. Typewriter Effect**

* Create a `<p>` element.
* Use `setInterval` to type out the text **"Welcome to DOM Practice!"** one letter at a time.
*/
let msg = "Welcome to Dom practice";
let indexTrack =0;
const welcome = document.getElementById("welcome");
let greeting =setInterval(()=>{
welcome.textContent+= msg[indexTrack++];
// welcome.textContent=msg[indexTrack++];

if(index==msg.length){
    clearInterval(greeting);
}
},1000)