// Business logic
var pingPong = (function(input){
  var numbersArray = [];
  for (var count = 1; count<=input; count++) {
    numbersArray.push(count);
  }
  return numbersArray;
});



// User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#inputnumber").val());
    var numbers = pingPong(inputNumber);
    numbers.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>")
    });
  });
});
