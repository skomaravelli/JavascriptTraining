//-	http://www.codewars.com/kata/word-count


 function countWords(str) {
  var regEx = /\s|\u00C0-\u00FF/g,
      splitStr = str.trim().split(regEx),
      wordCount = 0;
  for ( i = 0; i<splitStr.length; i++)
  {
    if(splitStr[i] != "")
    {
      wordCount = wordCount + 1;
    }
  }
  return wordCount;
}
