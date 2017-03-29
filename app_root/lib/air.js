console.log('air.js loaded');

$(function() {

// **********************************************/


/******************************************/
var $air= $('#idAir');
/******************************************/
var generateBoard = function(grid){
  // $('.square').remove();
  grid = 162;
  rows = 10;
  var idValue = '';

  for (var r=1 ; r <= rows; r++){
      for (var i=1; i <= grid; i++){
        var $square = $('<div>');
        idValue = ('r' + r + 'c' + i);
        $square.attr('id',idValue)
        $square.addClass('square');
        $air.append($square);
      }
  }
}
/******************************************/
generateBoard();

});

var throwBall = function(){
//background-color: ivory;
$square = $("#r1c30");
$square.css("height":"20px");
$square.css("width":"20px");
$square.css("color":"blue");

}
