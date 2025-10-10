/*3. **Object Destructuring & Template Literals**
const user = { name: "Rahul", city: "Pune" };
// Expected log: "Rahul lives in Pune"
*/
const user = { name: "Rahul", city: "Pune" };
const{name,city}=user;
console.log(`${name} lives in ${city}`);

