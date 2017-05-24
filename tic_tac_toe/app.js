console.log('app.js is connected');
/******************************************/
// console.log('app.js loaded');
$(function() {
// console.log('app.js loaded');

  var $btnStartGame = $('#btnStartGame');
  var $btnResetGame = $('#btnRestartGame');
  // var $clickSquare = $('.square');

  var $winner = $('#status');
  var intSquaresPlayed = 0;
  var arrSquaresPlayed = [];
  var arrSquaresPlayedX = [];
  var arrSquaresPlayedO = [];
  var xOrO = 'X';
  var gameOver = false;

  var $section= $('body');
  // var $square = $('<div>');
  var $board = $('<div>');

/******************************************/
  var makeBoard = function (){
    console.log('running make board')

    // $board.css("background-color", "grey");
    $board.attr('id','board');
    $section.append($board);
  }
/******************************************/
  var makeSquares = function(){
    var r = 0;
    var c = 0;
    var sq_id = '';

for (var j=1; j < 4; j++){
  r++;
  c++;
    for (var i=1; i < 4; i++){
        var $square = $('<div>');
        sq_id = 'r' + r + 'c'+ i;
        // console.log('row ' + c + i);
        $square.addClass('square');
        $square.attr('id',sq_id)
        //$square.text(sq_id);
        $square.on('click', clickSquare);
        $board.append($square);
    }

  // console.log(r);
}

}
/******************************************/
var startGame = function(){
  //console.log($(this));
  location.reload();
  console.log('start game');
}
/******************************************/
var clickSquare = function(){
// $clickSquare
  if (gameOver === true){stopPlaying();}
  //console.log($(this));
  var $picked = $(this);

  var $row_column = $picked.attr('id');
  if (checkSquare($row_column) !== false){
      //console.log($row_column);
      arrSquaresPlayed.push($picked.attr('id'));
      //console.log('arr' + arrSquaresPlayed);
      $picked.text(xOrO);

      if (xOrO == "X"){
          $picked.css("background-color", "grey");
          arrSquaresPlayedX.push($row_column);
          xOrO = "O";
          intSquaresPlayed++;
          $winner.text("O it is your Turn");
          checkWinner("X");
        }else{
          $picked.css("background-color", "#367ced");
          arrSquaresPlayedO.push($row_column);
          xOrO = "X";
          intSquaresPlayed++;
          $winner.text("X it is your Turn");
          checkWinner("O");
        }


    }
 }


/******************************************/
var resetGame = function(){
  location.reload();
  console.log('reset game');
}
/******************************************/
/******************************************/
var checkSquare = function(row_column){
  //console.log("checkSquare");

  if(jQuery.inArray(row_column, arrSquaresPlayed) !== -1){
    console.log("can't move there");
    return false;
  }
}
/******************************************/

var checkWinner = function(str){

  if (str == "X"){
    checkWinnerX('r1c1','r1c2','r1c3');
    checkWinnerX('r2c1','r2c2','r2c3');
    checkWinnerX('r3c1','r3c2','r3c3');

    checkWinnerX('r1c1','r2c1','r3c1'); //4
    checkWinnerX('r1c3','r2c3','r3c3'); //5
    checkWinnerX('r1c3','r2c2','r3c2');

    checkWinnerX('r1c1','r2c2','r3c3');
    checkWinnerX('r1c3','r2c2','r3c1');
    checkWinnerX('r1c2','r2c2','r3c2');

  }
  if (str == "O"){
    checkWinnerO('r1c1','r1c2','r1c3');
    checkWinnerO('r2c1','r2c2','r2c3');
    checkWinnerO('r3c1','r3c2','r3c3');

    checkWinnerO('r1c1','r2c1','r3c1'); //4
    checkWinnerO('r1c3','r2c3','r3c3');
    checkWinnerO('r1c3','r2c2','r3c2');

    checkWinnerO('r1c1','r2c2','r3c3');
    checkWinnerO('r1c3','r2c2','r3c1');
    checkWinnerX('r1c2','r2c2','r3c2');
  }

}
/******************************************/
var checkWinnerX = function(a,b,c){

  if (jQuery.inArray(a, arrSquaresPlayedX) === -1 ||
      jQuery.inArray(b, arrSquaresPlayedX) === -1 ||
      jQuery.inArray(c, arrSquaresPlayedX) === -1 ){
    //console.log('not a winner');
    if(intSquaresPlayed === 9){tie();}
      return;
  }else{
    $('#staus').text("X is a WINNER");
    console.log('winner');
    endGameWinner("X");
  }
}

/******************************************/
var checkWinnerO = function(a,b,c){

  if (jQuery.inArray(a, arrSquaresPlayedO) === -1 ||
      jQuery.inArray(b, arrSquaresPlayedO) === -1 ||
      jQuery.inArray(c, arrSquaresPlayedO) === -1 ){
    //console.log('not a winner');
    if(intSquaresPlayed === 9){tie();}
    return;
  }else{
    console.log('winner');
    endGameWinner("O");
  }
}
/******************************************/
var endGameWinner = function(str){
  if(str == "X"){
      console.log('at endGameWinner x')
      $winner.text("X is a WINNER");
      gameOver = true;
      return false;
    }else{
      console.log('at endGameWinner o')
      $winner.text("O is a WINNER");
      gameOver = true;
      return false;
  }
}
/******************************************/
var tie = function(){
  $winner.text("TIE");
  return false;
}
/******************************************/
var stopPlaying = function(){
  $winner.text("The Game is Over why are you still trying to play?");
  stopPlaying();
  return false;
}


$btnStartGame.on('click', startGame);
$btnResetGame.on('click', resetGame);

makeBoard();
makeSquares();
/******************************************/
});
