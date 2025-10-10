/*### 2️⃣ Async + Timers + Promises (20 Marks)

Write a script that:

* Logs “Start Process”
* Uses `setTimeout` (2 s) to log “Timer Done”
* Creates a Promise that resolves after 1 s with “Promise Resolved”
* Fetches `https://jsonplaceholder.typicode.com/comments/1` and logs `email`
* Logs “End Process” immediately after the synchronous code

**Expected Console Order:**
Start Process
End Process
Promise Resolved
[email from API]
Timer Done


**Marking Scheme:**

* Correct execution order → 10
* Proper use of Promise, setTimeout, and async/await → 5
* Fetch with error handling → 5 */
console.log("start");
setTimeout(()=>{
console.log("timer done");
},2000)
function mypromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve("Promised Resolved");
        },1000)
    })
}

   async function dataFetch(){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
         const data=  fetch("https://jsonplaceholder.typicode.com/comments/1");
     resolve(data)
     reject(new Error("Cannot Process"))
    },1000)

    })

}
let results = mypromise();
results.then((res)=>console.log(res))
.catch((error)=>{
    console.log(error);
})

let email = dataFetch();
email.then((res)=>{
    res.json()
})
.then((res)=>{
    console.log(res);
})
console.log("End Process");