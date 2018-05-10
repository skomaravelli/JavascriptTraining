//http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  switch (d > 0) {
    case d < 3:
      return (d * 40);
    case ((d>=3) && (d < 7)):
      return ((d * 40)-20);
    case (d>=7):
      return ((d * 40)-50);
  }
}

rentalCarCost(1);
