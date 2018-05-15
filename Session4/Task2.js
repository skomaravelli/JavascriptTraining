//-	http://www.codewars.com/kata/a-chain-adding-function

function add(n) {
  // Let the currying begin!
  var sum = function(x) {
    return add(n + x);
  };
  
  sum.valueOf = function() {
    return n;
  };
  
  return sum;
}