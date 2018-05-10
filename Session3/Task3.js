//http://www.codewars.com/kata/closures-and-scopes/train/javascript

function createFunctions(n) {
  var callbacks = [];
  for (var i = 0; i < n; i++) {
    (function () {
      var call = i;
      callbacks.push(function () {
        return call;
      });
    }());
  }
  return callbacks;
}