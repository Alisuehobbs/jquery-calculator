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

   if (Addition !== -1)
   firstNumber = 



 })








});
