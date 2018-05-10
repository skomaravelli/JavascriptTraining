//http://www.codewars.com/kata/calculating-with-functions


function zero(num) {
  if (num) {
    return num(0);
  } else {
    return 0;
  }
}
function one(num) {
  if (num) {
    return num(1);
  } else {
    return 1;
  }
}
function two(num) {
  if (num) {
    return num(2);
  } else {
    return 2;
  }
}
function three(num) {
  if (num) {
    return num(3);
  } else {
    return 3;
  }
}
function four(num) {
  if (num) {
    return num(4);
  } else {
    return 4;
  }
}
function five(num) {
  if (num) {
    return num(5);
  } else {
    return 5;
  }
}
function six(num) {
  if (num) {
    return num(6);
  } else {
    return 6;
  }
}
function seven(num) {
  if (num) {
    return num(7);
  } else {
    return 7;
  }
}
function eight(num) {
  if (num) {
    return num(8);
  } else {
    return 8;
  }
}
function nine(num) {
  if (num) {
    return num(9);
  } else {
    return 9;
  }
}

function plus(value) {
  return function (value1) {
    return value1 + value;
  }
}
function minus(value) {
  return function (value1) {
    return value1 - value;
  }
}
function times(value) {
  return function (value1) {
    return value1 * value;
  }
}
function dividedBy(value) {
  return function (value1) {
    return value1 / value;
  }
}

