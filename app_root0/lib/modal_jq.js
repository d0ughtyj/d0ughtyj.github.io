/*credit https://www.w3schools.com/howto/howto_css_modals.asp*/

console.log('modal_jq.js loaded');

$(document).ready(function() {
  console.log( 'ready!' );

var $modal = $('#idModal');
var $idButton = $('#idButton');
var $span = $('.close');
/***********************************************/
// When the user clicks on the button, open the modal
$idButton.click(function() {
  console.log( 'click button' );
  $modal.css("display", "block");
  $('P').text("Yikes you hit a ball. Bump!");
  return;
});
/***********************************************/
// When the user clicks on <span> (x), close the modal
$span.click(function() {
  $modal.css("display", "none");
  return;
});
/***********************************************/
// When the user clicks anywhere outside of the modal, close it
$("#idModal").click(function(event) {
  $modal.css("display", "none");
  return;
});
/***********************************************/
});
/***============ end jquery load functions =====================***/
/***********************************************/
var modalGameWon = function(){
  console.log( 'modalGameWon' );
  var $modal = $('#idModal');
  $modal.css("display", "block");
  $('P').text("Game Over!");
}
/***********************************************/
/***********************************************/
var modalBump = function(){
  console.log( 'modal Bump fired' );
  var $modal = $('#idModal');
  $modal.css("display", "block");
  $('P').text("Yikes you hit a ball. Bump!");
  return;
}
/***********************************************/
var loadHowTo = function(){
  console.log( 'loadHowTo fired' );
  // var $modal = $('#idModal');
  // $modal.css("display", "block");
  document.getElementById("idAir").innerHTML='<object type="text/html" data="rules.html" ></object>';
  return false;
}
/***********************************************/
// function loadHowTo1() {
//
//      document.getElementById("idHtmlPages").innerHTML='<object type="text/html" data="how_to_play.html" ></object>';
// }
