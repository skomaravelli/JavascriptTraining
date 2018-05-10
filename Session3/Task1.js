//http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  if (isNaN(n) || Number(n) < 0 || !isFinite(n) || parseInt(n) !== Number(n) || typeof (n) === 'boolean') 
   {
    	throw new TypeError(n + ' is invalid');
 	 }
   else
   {
      return Array.apply(null,Array(parseInt(n))).map(function () {  
        return v;
      });
   }
}