console.log('app.js is connected');
/******************************************/
// console.log('app.js loaded');
$(function() {
// console.log('app.js loaded');

var global = 0;

var $force = $('#idForce').val();
var $angle = $('#idAngle').val();

var fun = function(num){
  global++;
  console.log('we just ran the function fun');
  console.log(global);
}



$('#inputButtonP').on('click', addTextToHtml("player1","p1"));


/******************************************/
});

var addTextToHtml = function(str1,str2){

  var $force = $('#idForce').val();
  var $angle = $('#idAngle').val();

  console.log('num + str: ' + str1 + " " + str2)
  console.log('$intForce: ' + $force)
  console.log('$intAngle: ' + $angle)
}
