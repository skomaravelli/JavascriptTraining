//-	http://www.codewars.com/kata/word-count

function countWords(str) {
  var regEx = /[^\s]+/g;
  var matchString = str.match(regEx) || [];
  return matchString.length;
}
