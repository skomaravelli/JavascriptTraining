//-	http://www.codewars.com/kata/get-the-middle-character


function getMiddle(s)
{
  if (s.length % 2 == 0) 
  {
    return s.substr((s.length / 2) - 1, 2);// even
  }
  else
  {
    return s.substr(Math.floor(s.length / 2), 1); //odd
  }
}