$(document).ready(function () {


$('#buttons-container').on('click', function() {
  var currentNumber = parseInt($(event.target).text())
  $('#screen').append(currentNumber)
})

$('#buttons-container').on('click', '.operator', function() {
  var operator = $(event.target).text()
  $('#screen').append(operator)
})

$('#buttons-container').on('click', '#clear', function() {
  location.reload()
})

//operations
 $('#equals').click(function() {
   var equation = $('#screen').text();

   var Addition = equation.indexOf('+')
   var Subtraction = equation.indexOf('-')
   var Multiplication = equation.indexOf('x')
   var Division = equation.indexOf('÷')

   var firstNumber = ''
   var secondNumber = ''
   var total = 0;

   if (Addition !== -1) {
   firstNumber = parseInt(equation.substring(0, Addition))
   secondNumber = parseInt(equation.substring(Addition + 1, equation.length))
   total = firstNumber + secondNumber
  }

  else if (Subtraction !== -1) {
   firstNumber = parseInt(equation.substring(0, Subtraction))
   secondNumber = parseInt(equation.substring(Subtraction + 1, equation.length))
   total = firstNumber - secondNumber
 }

  else if (Multiplication !== -1) {
   firstNumber = parseInt(equation.substring(0, Multiplication))
   secondNumber = parseInt(equation.substring(Multiplication + 1, equation.length))
   total = firstNumber * secondNumber
 }

   else if (Division !== -1) {
   firstNumber = parseInt(equation.substring(0, Division))
   secondNumber = parseInt(equation.substring(Division + 1, equation.length))
   total = firstNumber / secondNumber
 }

 if (typeof total === "number" && total === total) {
   $('#screen').text(total)
 } else {
   $('#screen').text('ERROR')
 }

})








});
