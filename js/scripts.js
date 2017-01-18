$(function(){
  // The year can be evenly divided by 4;
  // If the year can be evenly divided by 100, it is NOT a leap year, unless;
  // The year is also evenly divisible by 400. Then it is a leap year.


//Front-End
  $('form#leap-form').submit(function(event){
    event.preventDefault();
    var inputValue = parseInt($('input#userInput').val());
    leapChecker(inputValue);
  });



//Back-End Logic
  var leapChecker = function(inputValue){
    if ( (inputValue % 4 === 0 && inputValue % 100 != 0) ||  inputValue % 400 === 0){
      alert("Leap Year!");
    } else {
      alert("Not Leap Year");
    };
  };
});
