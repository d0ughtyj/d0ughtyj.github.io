// console.log('display.js loaded');

  var $displayStatus = $('#idStatus');
  var $displayConfig = $('#idConfig');
  var $displayAir = $('#idAir');
  var $displayBoard = $('#idBoard');
  var $displayActor = $('#idActor');
  var $displayScore = $('#idScore');
// /******************************************/
var displayRotateActor = function(ang){
  console.log('displayRotateActor ' + ang);
// #idActor{
// transform: rotate(-15deg);
// $("p").css("background-color", "yellow");
  var $actor = $("#idActor")
  deg = 'transform: rotate(-' + ang + 'deg)';
  console.log(deg);

  $actor.css(deg);
  return;
}
// /******************************************/
var displayBump = function(){


}
// /******************************************/
var displayTossBall = function(){
// #idActor{
// transform: rotate(-15deg);
// background-image: url("../images/actor.png");
}
// /******************************************/
var displayRound = function(){
  var num = intRoundsPlayed + 1;
  $displayStatus.text('Playing round number ' + num);
  displayScore();
  return;
}
// /******************************************/
var displayStartGame = function(){
  $displayAir.text(null);
  $displayActor.text(null);
  $displayStatus.text('Game Starting, 10 rounds a game. ');
  displayScore();
  return;
};
// /******************************************/
var displayScore = function(){
  $displayScore.text('Score: Blue: ' + intScorePlayer1 +' Yellow: ' + intScorePlayer2);
  return;
}
// /******************************************/
var displayStatus = function(){
  displayRound();
  return;
}
// /******************************************/
var displayGameOver = function(who){
  $displayStatus.text('Game Over, ' + intRoundsPlayed + ' Rounds played ' +who);
  $('#inputButtonNext').hide();
  $('#inputButtonNextGame').show();
  return;
}
// /******************************************/
displayStartGame();
