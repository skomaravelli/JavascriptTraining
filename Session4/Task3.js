//-	http://www.codewars.com/kata/function-cache

function cache(func) {
  var cached = {};
  return function() {
    var args = JSON.stringify(arguments);
    if(!(args in cached)) {
      cached[args] = func.apply(func, arguments);
    }
    return cached[args];
  };
}