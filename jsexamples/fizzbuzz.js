let maxNum = 100;
let output = []


function fizzBuzz(){
   for(i=1; i<=maxNum; i++){
       if(i%3 === 0 && i%5 ===0){
           output.push("FizzBuzz!");
       }
       else if(i%3 === 0){
           output.push("Fizz!");
       } else if (i%5 === 0){
           output.push("Buzz!");
       } else{
           output.push(i);
       }
        
   }
   return output;
}

fizzBuzz()