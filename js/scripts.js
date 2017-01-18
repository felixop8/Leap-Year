$(function(){
  // The year can be evenly divided by 4;
  // If the year can be evenly divided by 100, it is NOT a leap year, unless;
  // The year is also evenly divisible by 400. Then it is a leap year.

  var theyear= 1600;

  if ( (theyear % 4 === 0 && theyear % 100 != 0) ||  theyear % 400 === 0){
    alert("Leap Year!");

  } else {
    alert("Not Leap Year");
  }

});
