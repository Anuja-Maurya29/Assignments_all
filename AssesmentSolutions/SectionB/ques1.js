/*  
## Section B – Short Code Questions (30 Marks → 6 × 5 marks)
*/

// 1. **Conditional Statement**
//    Write a function `temperatureCheck(temp)` that logs:

// * "Too Cold" if temp < 10
// * "Pleasant" if 10–30
// * "Hot" if > 30

//Ans:1
function temperatureCheck(temp)
{
    if(temp<=0){
return "invalid temp";
    }
    else if(temp<10){
        return "To Cold";
    }
    else if(10>temp<=30)
        {
         return "pleasent"
        }
    
        else if(temp>30){
            return "Hot";
        }
}
console.log(temperatureCheck(34));
