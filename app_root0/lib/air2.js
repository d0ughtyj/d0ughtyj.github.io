// http://tobiasahlin.com/blog/curved-path-animations-in-css/
// http://thenewcode.com/860/Animating-Elements-In-Arcs-Circles-and-Ellipses-With-CSS

$(function() {

// ****************************************** //


var $x = $('#idX').val();
var $y = $('#idY').val();


});
// ============================================= //


var throwBall = function(){
  var x = '600px'  ;
  var y = '200px';

  var ball_translate = 'translate('+  x + 'px,'+y+'px)';

  console.log('ball_translate: ' + ball_translate);

  var $air= $('#idAir');
  var $ball = $('<div>');
  $ball.addClass('ball');
  $air.append($ball);

  $ball.css("z-index","-2");
  $ball.css("left", "50px");
  $ball.css("top", "50px");
  // $ball.css("position", "absolute");

  $ball.css("background","url(images/red-ball.png) no-repeat");

  $ball.css("-webkit-transition","3s ease-in-out");
  $ball.css("-moz-transition", "3s ease-in-out");
  $ball.css("transition", "3s ease-in-out");

  //$ball.css("background","url(images/ball.png) no-repeat");

}
/**************************************************************/
var moveCircle = function() {
  if ($('#test').hasClass('moved')) {
    $('#test').removeClass('moved');
  } else {
    $('#test').addClass('moved');
    moveCircleDown();
  }
}
/****************************************************************/
var moveCircleDown = function() {
      //------------------------------------/
      setTimeout(function () {
          $('#test').removeClass('moved');
          $('#test').addClass('movedBottom')
      }, 2000)
      //------------------------------------/
}
/****************************************************************/
// reset game
function startOver(){
  location.reload();
};
/****************************************************************/
