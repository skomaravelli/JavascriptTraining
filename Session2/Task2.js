//-	http://www.codewars.com/kata/get-the-middle-character


function getMiddle(s) {
  var result;
  if (s.length % 2 == 0) {
    result = s.substr((s.length / 2) - 1, 2);
  } else {
    result = s.substr(Math.floor(s.length / 2), 1);
  }
  return result;
}