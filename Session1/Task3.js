//http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  var result = value1 + operation + value2;
  return Function('return (' + result + ')')();
}