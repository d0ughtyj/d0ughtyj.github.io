console.log('app.js is connected');
/******************************************/
// console.log('app.js loaded');
$(function() {

// **********************************************/

var changeColor = function(){
  $(this).addClass('pink');
}

var getInput = function(){
  // inputBox.val();
  var $inputBox = $('#inputBox');

  var $inputValue = $inputBox.val();
  console.log('$inputValue: ' + $inputValue);
  var grid = parseInt($inputValue);
  generate(grid);
}

// var $inputBox = inputBox.val();

var $sketchPad= $('body');

$('#inputButton').on('click', getInput)
$('#inputButtonChange').on('click', changeColor)

/******************************************/
var generate = function(grid){
  $('.square').remove();
  for (var i=1; i <= grid; i++){
    var $square = $('<section>');
    $square.addClass('square');


    $square.on('mouseover', changeColor);
    $sketchPad.append($square);
  }
}
/******************************************/
// console.log($sketchPad);
// $myButton.on('click', fun);
// $myButton2.on('click', addTextToHtml);
/******************************************/
});
