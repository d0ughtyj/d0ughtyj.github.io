console.log('air.js loaded');

$(function() {
/******************************************/
var $air= $('#idAir');
/******************************************/
var generateBoard = function(grid){
  // $('.square').remove();
  grid = 50;
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
//generateBoard2();
});
// ========================on load function end =================

var angleArms = 0;


/******************************************/
var bumpMessage = function(){

};
/******************************************/
var rotateArms2 = function(){
    //background-color: ivory;
    //var $square = $("#r1c30");
    var $square = $("#20");
    $square.css("height","20px");
    $square.css("width","20px");
    $square.css("color","blue");
};
// /******************************************/
var rotateArms1 = function(){
  angleArms += 10;
  if (angleArms > 60){
    angleArms = 0;
    }
  var $actor = $("#idActor");
  // var $actor = $("#idArms");
  console.log("angleArms: " + angleArms);
  $actor.css("transform", "rotate(-" + angleArms + "deg)");
  return;
}
// /******************************************/
/****************************************************************/
// reset game
function startOver(){
  location.reload();
};
/****************************************************************/
var generateBoard2 = function(){
  var $air= $('#idAir');
  var grid = 10;
  $('.square').remove();
  for (var i=1; i <= grid; i++){
    var $square = $('<div>');
    idValue = (i);
    $square.attr('id',idValue);
    $square.addClass('square');
    $air.append($square);
  }
}
/****************************************************************/

function generateBoard3(){

      var $air= $('#idAir');
      // var e = document.body; // whatever you want to append the rows to:
      console.log('generateBoard3 ' + $air);
      var grid = 42;
      var numRows = grid / 2;
      for(var i = 0; i < numRows; i++){
        var $row = $("<div>");
        $row.addClass = "row";
        for(var x = 1; x <= grid; x++){
            console.log('$cell' + x);
            var $cell = $("<div>");
            $cell.addClass('square');
            var idText = (i * grid) + x;
            $cell.attr('id',idText);
            $cell.text = (i * grid) + x;
            $row.append($cell);
        }
        $air.append($row);
      }
      //document.getElementById("code").innerText = e.innerHTML;

    }

/****************************************************************/

function genDivsVJS(v){
      var e = document.body; // whatever you want to append the rows to:
      for(var i = 0; i < v; i++){
        var row = document.createElement("div");
        row.className = "row";
        for(var x = 1; x <= v; x++){
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
      }
      document.getElementById("code").innerText = e.innerHTML;

    }

/****************************************************************/
