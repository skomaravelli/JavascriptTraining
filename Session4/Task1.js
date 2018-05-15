// -	http://www.codewars.com/kata/using-closures-to-share-class-state

// Let's make a Cat constructor!
var Cat = (function () {
  var name = '', arr = [];
  function Cat(name, weight) {
    var _weight = 0;
    this.name = name;
    if (typeof name === 'undefined' || typeof weight === 'undefined') {
      throw new TypeError('');
    }
    arr.push(weight);

    Object.defineProperty(this, "weight", {
      get: function () {
        return _weight;
      },
      set: function (value) {
        var indexToSplice = arr.indexOf(_weight);
        if (indexToSplice > -1) {
          arr.splice(indexToSplice, 1, value);
        }
        _weight = value;
      }
    });

    this.weight = weight;
  }

  Cat.averageWeight = function () {
    var avg = arr.reduce(function (a, b) {
      return a + b;
    }, 0);
    return avg / arr.length;
  }

  return Cat;
}());
