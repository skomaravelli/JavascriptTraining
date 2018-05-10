//-	http://www.codewars.com/kata/partition-on


function partitionOn(pred, items) {

   var evens = [], odds = [], result;
    items.forEach(function(value) {
     if(pred(value))
     {
       evens.push(value);
     }
     else
     {
       odds.push(value);
     }
        
    });
   
    items.splice(0,items.length);
    result = odds.concat(evens);
     result.forEach(function(value) {
     items.push(value);
    });
     return odds.length; 
 }