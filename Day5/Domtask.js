/*
### **1. Selecting Elements**
Given an HTML snippet:
```html
<h1 id="title">Hello</h1>
<p class="desc">Welcome to training</p>
```
**Task:**

* Select the `<h1>` using `getElementById` and change its text to `"Hello Interns!"`.
* Select the `<p>` using `querySelector` and change its text color to `"blue"`.
*/
const title =document.getElementById("title");
title.innerText="hello interns";
 const para =document.querySelector(".desc");
 para.style.color="blue";

 /*### **2. Changing Content & Styles**
Given:
html
<div id="box">Old Content</div>
**Task:**
* Change the content to `"New Content Loaded"`.
* Add a red border (`2px solid red`) using JavaScript.*/
const div =document.getElementById("box");
div.innerText="New Content Loaded";
div.style.border="2px solid red"

/*### **3. Creating and Appending Elements**
* Dynamically create a `<li>` element with text `"Intern 1"`.
* Append it to an existing `<ul id="internList">`.
Example HTML:
html
<ul id="internList">
  <li>Existing Intern</li>
</ul>
After JS execution, list should have both items.
*/
const list = document.getElementById("internList");
const li = document.createElement("li")

li.innerText="Intern 1";
list.append(li);
/*
### **4. Removing Elements**
Given:
html
<ul id="tasks">
  <li>Task 1</li>
  <li id="removeMe">Task 2</li>
</ul>
**Task:**
* Remove the `<li>` with id `"removeMe"`.
*/

const element =document.getElementById("removeMe")
element.remove();

/*### **5. Event Listener – Button Click**
Given:
html
<button id="clickMe">Click Me</button>
<p id="output"></p>
**Task:**
* When the button is clicked, change the `<p>` text to `"Button was clicked!"`.*/
const btn =document.getElementById("clickMe");
btn.addEventListener("click",()=>{
    const para = document.getElementById("output");
    para.innerText="Button was clicked";
}
)
 /*
### **6. Event Listener – Mouse Hover**
Given:
html
<div id="hoverBox" style="width:100px; height:100px; background:gray;"></div>
**Task:**
* When the mouse hovers over the box, change its background color to `"green"`.
* When the mouse leaves, change it back to `"gray"`.
*/
const hoverBox= document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover",()=>{
    hoverBox.style.background="green";
})

hoverBox.addEventListener("mouseout",()=>
{
    hoverBox.style.backgroundColor="gray";
})

/*### **7. Form Validation – Required Field**
html
<form id="signupForm">
  <input type="text" id="username" placeholder="Enter username" />
  <button type="submit">Submit</button>
  <p id="errorMsg"></p>
</form>
**Task:**
* Prevent form submission if `username` is empty.
* Show error message `"Username is required"` in `<p id="errorMsg">`.
* If filled, clear error and log `"Form submitted!"`.
*/
const form= document.getElementById("signupForm");
const username=document.getElementById("username");
const msg =document.getElementById("errorMsg");

form.addEventListener("submit",(e)=>
{
  e.preventDefault();
  if(username.value.trim()===""){
    msg.innerText="Username is required";
  }
  else{
    username.value="";
    msg.innerText="Form Submitted";
  }
return 0;
})

/*### **8. Form Validation – Simple Email Check**
html
<form id="emailForm">
  <input type="text" id="email" placeholder="Enter email" />
  <button type="submit">Submit</button>
  <p id="emailError"></p>
</form>
**Task:**

* Validate that email contains `"@"`.
* If not, show `"Invalid email format"`.
* Otherwise log `"Valid email"`.
*/

const emailForm= document.getElementById("emailForm");
const emailId= document.getElementById("email");
const emailMsg = document.getElementById("emailError");

emailForm.addEventListener("submit",(e)=>{
  const pattern =/^ [^ ]+@+[^ ]+.\[a-z]{2,3} $/;
e.preventDefault();
  if(!(pattern ===emailId.value.trim())){
    emailId.value="";
    emailMsg.innerText="Invalid Email Format";
  }
  else{
  
    emailId.value="";
    
    emailMsg.innerText="Valid Email";
  }
})

/*
### **9. Timers (setTimeout, setInterval, clearInterval)**
 Create a countdown timer:

    * Have a ```<p> that shows: "Countdown: 10"```.
    * On button click:
        * Start a countdown from 10 → 0 using setInterval.
        * When it reaches 0, show "Time’s up!" and stop the interval (clearInterval).

**Bonus:**
 Add another button: "Stop Timer" → stops the countdown midway
 setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

 */
let timer;
const counter =document.getElementById("counter");
const start =document.getElementById("start");
const stop =document.getElementById("stop");
const timerMsg=document.getElementById("timerMsg")
start.addEventListener("click",()=>
{
  if(timer){
    return;
  }
timer=setInterval(()=>{
  
  if(Number(counter.innerText)===0){
   clearInterval(timer)
      timerMsg.innerText="Timer's up!"
      
  }
  
counter.innerText=+ counter.innerText-1;
},1000)
})

stop.addEventListener("click",()=>{
  setTimeout(()=>{
clearInterval(timer);
  },0)
})

function greet() {
  setTimeout(()=>{
const greet=document.getElementById("greet");
greet.innerText="hello!!";
  },3000)
}