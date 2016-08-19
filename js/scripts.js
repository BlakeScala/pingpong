// Business logic
var pingPong = (function(input){
  var numbersArray = [];
  if (isNaN(input)) {
    alert("It only works if you enter a number!")
  }
  for (var count = 1; count<=input; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      numbersArray.push("ping-pong");
    }
    else if (count % 3 === 0) {
      numbersArray.push("ping");
    }
    else if (count % 5 === 0) {
      numbersArray.push("pong");
    }
    else {numbersArray.push(count);
    }
  }
  return numbersArray;
});



// User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    $("#output").empty();
    event.preventDefault();
    var inputNumber = parseInt($("#inputnumber").val());
    var numbers = pingPong(inputNumber);
    numbers.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>")
    });
  });
});
