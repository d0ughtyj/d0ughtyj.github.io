console.log('air.js loaded');

$(function() {
/******************************************/
var $air= $('#idAir');
/******************************************/
var generateBoard = function(grid){
  // $('.square').remove();
  grid = 20;
  rows = 10;
  var idValue = '';

  for (var r=1 ; r <= rows; r++){
      for (var i=1; i <= grid; i++){
        var $square = $('<div>');
        idValue = ('r' + r + 'c' + i);
        $square.attr('id',idValue);
        $square.addClass('square');
        $air.append($square);
      }
  }
}
/******************************************/
/******************************************/
var generateBoard2 = function(){
  var grid = 500;
  $('.square').remove();
  for (var i=1; i <= grid; i++){
    var $square = $('<div>');
    idValue = (i);
    $square.attr('id',idValue);
    $square.addClass('square');
    $air.append($square);
  }
}
/******************************************/
generateBoard2();
});
// ========================on load function end =================
var throwBall = function(){
    //background-color: ivory;
    //var $square = $("#r1c30");
    var $square = $("#20");
    $square.css("height","20px");
    $square.css("width","20px");
    $square.css("color","blue");
};
