/*### 1️⃣ DOM + Events + Objects (20 Marks)

Build a small webpage that:

* Has an input field for product name and price.
* On clicking “Add Product”, add the data into a table below with two columns (Name & Price).
* Each row should have a “Delete” button to remove that entry.
* Maintain the data in an array and re-render when updated.

**Marking Scheme:**

* DOM selection & event binding → 5
* Add row & delete row functionality → 10
* Array data handling → 5 */
const product =document.getElementById("product")
const price =document.getElementById("price")
const add = document.getElementById("add");
const table =document.getElementById("itemTable");
let amount =[];
let productName =[];
product.addEventListener("change",(event)=>{
    productName.push(product.value);
     
    console.log(productName);
})

price.addEventListener("change",(event)=>{
    amount.push(price.value);
    console.log(amount);
})
add.addEventListener("click",()=>{
    product.value="";
    price.value=""
// let header =document.createElement("th")
// header.innerText="Products";
// table.append(header);
// let tableData = document.createElement("td");
// tableData.value=productName
// row.append(tableData);
})


function tableContent( products,price){
    let productlength = products.legth;
    let price = price.length;
    

}
