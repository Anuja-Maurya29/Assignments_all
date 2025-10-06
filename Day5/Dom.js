// this is dom practice code
const counter = document.getElementById("count");
//getting buttons
const inc = document.getElementById("inc");
const dec =document.getElementById("dec");
inc .addEventListener("click",()=>{
    counter.innerText= +counter.innerText+1;
})

dec.addEventListener("click",()=>
{
  
    counter.innerText =+counter.innerText-1;
    // const {text} =counter;
    // text.innerText = +text-1;
}  );

//event delegation :

//by querry selector 
// const list1= document.querySelector(".list");
// list1.array.forEach(element => {
//     element.addEventListener("click",(e)=>{
//         console.log("hello",e.innerText);
//     })
// });
const list = document.getElementById("parent-list");
//one way 
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
    console.log("list",e.target.innerText);
    }
})



// prevent defaiult 
// getting form id
const form = document.querySelector("#myform");
form.addEventListener("submit",(e)=>
{
e.preventDefault();
console.log(`Your typed value is: ${e.target.input.value}`)
})
// event bubbling -> stopPropogation():
const outer = document.getElementById("outer-box");
const inner = document.getElementById("inner-box");
inner.addEventListener("click",(e)=>{
e.stopPropagation();
console.log("inner box");
})
outer.addEventListener("click",(e)=>{
e.stopPropagation();
    console.log("outer box");
})

//toggle example 
const text = document.getElementById("toggle-text");
const btn = document.getElementById("toggle-btn");
btn.addEventListener("click",()=>{
    if(text.style.visibility=== "hidden"){
        text.style.visibility="visible";
    }
    else{
        text.style.visibility="hidden";
    }
})