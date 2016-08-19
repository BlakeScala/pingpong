




// User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputNumber = $("#inputnumber").val();
    console.log(inputNumber);
    event.preventDefault();
  });
});
