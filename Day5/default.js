const btn =document.getElementById("btn")
const msg = document.getElementById("text-input")
const heading =document.getElementById("heading");
 msg.addEventListener("input",(e)=>{
    console.log(e.target.value);
 })

 //using button 
 btn.addEventListener("click",(e)=>{
heading.innerText=msg.value
    // console.log((msg.value));
 })