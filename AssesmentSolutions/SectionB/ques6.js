/* 
6. **Async/Await + Error Handling**
   Fetch `https://jsonplaceholder.typicode.com/todos/1` and log `title`.
   If request fails, print `"Unable to fetch data"`.
*/
 async function dataFetch(){
    
   let data =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
   
 }
 let title =dataFetch()
 title.then((res)=>res.json()).then((res)=>{
    console.log(res);
 })
 .catch((error)=>{
    console.log(error);
 })
 