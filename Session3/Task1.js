//http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  if (isNaN(n) || Number(n) < 0 || !isFinite(n) || parseInt(n) !== Number(n) || typeof (n) === 'boolean') {
    throw new TypeError(n + ' is invalid');
  } else {
    var number = parseInt(n);
    var arry = Array.apply(null, Array(number));
    return arry.map(function () {
      return v;
    });
  }
}