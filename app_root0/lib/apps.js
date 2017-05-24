/**
 * apps.js
 * description
 *
 *
 * @version 0.8
 * @author  Jim Doughty, https://github.com/d0ughtyj/
 * @email jim.doughty.colorado@gmail.com
 * @updated
 * @link
 *
 *
 */

var whoWon = '';
var intTurnNumber = 1;
var intRoundsPlayed =1;
var intScorePlayer1 =0;
var intScorePlayer2 = 0;

var locationPallino = 0;
var locationPlayer1 = 0;
var locationPlayer2 = 0;
var arrForce = [1,1];

// console.log('app.js is connected');
/******************************************/
// console.log('app.js loaded');
$(function() {

// **********************************************/


  var arrBoard = [];
  var intSquarePallino = 0;
  var intSquarePayer1 = 0;
  var intSquarePayer2 = 0;

//  console.log('arrForce: ' + arrForce)
  var $myButton1 = $('#inputButtonP');
  var $myButton2 = $('#inputButtonP1');
  var $myButton3 = $('#inputButtonP2');

  // buttons for user to play game
  $('#inputButtonP').show();
  $('#inputButtonNext').hide();
  $('#inputButtonP1').hide();
  $('#inputButtonP2').hide();
  $('#inputButtonNextGame').hide();

/******************************************/
var $board= $('#idBoard');
/******************************************/
// grid to throw balls onto
var generateBoard = function(grid){
  // $('.square').remove();
  grid = 115;
  for (var i=1; i <= grid; i++){
    var $square = $('<div>');
    $square.attr('id',i)
    $square.addClass('square');
    // console.log(i);
    // $square.on('mouseover', changeColor);
    $board.append($square);
    $('#inputButtonP').show();
    $('#inputButtonP1').hide();
    $('#inputButtonP2').hide();
  }
}
/******************************************/
generateBoard();
//modalBump();
});
// ========================on load function end =================

// function used for next round click
var NewRound = function(){
  // reset locations for next round
  intTurnNumber = 1;
  //intRoundsPlayed++;
  removeBall('pallino');
  removeBall('player1');
  removeBall('player2');

  $('#inputButtonNext').hide();
  $('#inputButtonNextGame').hide();
  $('#inputButtonP').show();
  displayRound();
}
/******************************************/
/**
 * toss ball on to board / grid.
 * @param {string} who player name.
 * @param {string} str player code letters.
 * @returns new <div> in grid
 */
var toss = function(who,str){
  //who,str
  // var intSpot = "3";
  //displayRound();
  var $force = $('#idForce').val();
  var $angle = $('#idAngle').val();
  // add debug
  displayRotateActor($angle);
  // var intSpot = getRandomIntMinMax(1,99);
  // getForceFromStr($force);
  console.log('arrForce: ' + arrForce);
  // console.log('$angle: ' + $angle)
  // var intSpot = getRandomIntMinMax(arrForce[0],arrForce[1]);
  //console.log('intSpot: ' + intSpot);
  // removeBall(who);
  var intSpot = getDistance($angle,$force);

  // check if balls are in the same location
  switch(who) {
      case 'player1':
        if (locationPallino == intSpot){
          intSpot++
          console.log('there was a bump!')
          modalBump(); // bump message
        }
      break;
      case 'player2':
        if (locationPlayer1 == intSpot){
          intSpot++
          console.log('there was a bump!')
          modalBump(); // bump message
        }
        if (locationPallino == intSpot){
          intSpot++
          console.log('there was a bump!')
          modalBump(); // bump message
        }
      break;
    }

  // call function to store location
  storeBallLocation(who, intSpot);
  var idSpot = "#" + intSpot;
  var $square = $(idSpot);
  // $square.text(str);
  // fix
  // $square.removeClass('square');
  $square.addClass(who);

  //console.log('sq:' + $square);
  console.log('$force: ' + $force + " $angle: " + $angle + " intTurnNumber " + intTurnNumber + ' location: ' + intSpot);

  switch(intTurnNumber) {
      case 1:
        $('#inputButtonP1').show();
        $('#inputButtonP').hide();
        intTurnNumber++;
        break;
      case 2:
        $('#inputButtonP1').hide();
        $('#inputButtonP2').show();
        intTurnNumber++;
        break;
      case 3:
        $('#inputButtonNext').show();
        $('#inputButtonP2').hide();
        console.log('check score');
        checkScore();
        break;
    }

};
// /******************************************/

var storeBallLocation = function(who,idSpot){
  console.log('storeBallLocation');
  //var $square = $(idSpot);
  switch(who) {
      case "pallino":
          locationPallino = idSpot;
          //console.log('store locationPallino ' + locationPallino);
          break;
      case "player1":
          locationPlayer1= idSpot;
          //console.log('store locationPlayer1: ' + locationPlayer2)
          break;
      case "player2":
          locationPlayer2= idSpot;
          //console.log('store locationPlayer2: ' + locationPlayer2);
          break;
    }
};
/******************************************/
// remove ball before next throw / toss
var removeBall = function(who){
  //console.log('remove ball ' + who)
  switch(who) {
      case "pallino":
          var $square = $('.pallino');
          locationPallino = 0;
          $square.text(null);
          // fix
          // $square.addClass('square');
          $square.removeClass(who);
          break;
      case "player1":
          var $square = $('.player1');
          locationPlayer1 = 0;
          $square.text(null);
          // fix
          // $square.addClass('square');
          $square.removeClass(who);
          break;
      case "player2":
          var $square = $('.player2');
          locationPlayer2 = 0;
          // fix
          // $square.addClass('square');
          $square.text(null);
          $square.removeClass(who);
          break;
  }
};
/****************************************************************/
// how far to place balls
function getDistance(ang,force){
  //console.log('force: ' + force)
  getForceFromStr(force);
  // console.log('arrForce: ' + arrForce);
  ang = Number(ang);
  // Math.cos(x)
  var distance2 = getRandomIntMinMax(arrForce[0],arrForce[1]);
  var distance = (Math.cos(ang) * distance2).toFixed(0);
  //console.log('ang: ' + ang + ' distance: ' + distance + ' distance2: ' + distance2);
  distance = Math.abs(distance);
  //console.log('distance: ' + distance)
  return distance;
};
/****************************************************************/
// determine array to use for ball grouping
function getForceFromStr(force){
  //arrForce.length=0;
  switch(force) {
    case "soft":
        // arrForce = [20,24];
        arrForce = [30,50];
        break;
    case "normal":
        arrForce = [51,89];
        break;
    case "hard":
        arrForce = [90,113];
        break;
  }
};
/****************************************************************/
// reset game
function startOver(){
  location.reload();
};
/****************************************************************/
// image rotate for angle selected
function updateActor(){
  var $angle = $('#idAngle').val();
  displayRotateActor($angle);
};
/****************************************************************/
// random numbers for distance
function getRandomInt(max) {
Math.floor(Math.random() * 100) + 1;
};
/****************************************************************/
// random numbers for distance
function getRandomIntMinMax(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};
/****************************************************************/
