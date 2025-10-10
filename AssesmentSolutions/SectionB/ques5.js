/*5. **Array Methods**
const scores = [45, 72, 88, 30, 95];
* Use `filter()` to get scores ≥ 50.
* Use `reduce()` to calculate the total score.*/

let scores = [45, 72, 88, 30, 95];
let total = 0;
let HighScore = scores.filter((e)=>e>=50);
console.log("Highest Scores:",HighScore);
console.log("toatal Score:", scores.reduce((acc,cv)=>acc+cv,total));

