console.log("toss_ball.js loaded");


/******************************************/
function throwBall(){
    console.log('throwBall');

    var x = '600px'  ;
    var y = '200px';

  var ball_translate = 'translate('+  x + 'px,'+y+'px)';

  console.log('ball_translate: ' + ball_translate);

  var $air= $('#idAir');
  var $ball = $('<div>');
  $ball.addClass('ball');
  $air.append($ball);


  $ball.css("left", "25px");
  $ball.css("top", "184px");
  $ball.css("position", "absolute");

  $ball.css("background","url(images/red-ball.png) no-repeat");

  $ball.css("-webkit-transition","3s ease-in-out");
  $ball.css("-moz-transition", "3s ease-in-out");
  $ball.css("transition", "3s ease-in-out");

  setTimeout(function () {
      // $ball.css("left", x);
      // $ball.css("top", y);

    // $ball.css("-webkit-transform", "translate(600px,20px");
    // $ball.css("-moz-transform", "translate(600px,20px");
    // $ball.css("-ms-transform", "translate(600px,20px");
    $ball.css("transform", "translate(400px,-100px");

  }, 2000);

  $ball.css("transition", "6s ease-in-out");

  setTimeout(function () {
      $ball.css("background","url(images/ball.png) no-repeat");
      $ball.css("transform", "translate(700px,100px");

  }, 2000)

      // // remove the ball
      // setTimeout(function () {
      //   $('.ball').remove();
      // }, 4000);


    // $ball.css("-webkit-transform", "translate(400px,-50px)");
    // $ball.css("-webkit-transform", "translateY(400px)");
    // $ball.css("-webkit-transform", "translate("+x+"px,-150px");
    // $ball.css("-moz-transform", "translate("+x+"px,-150px");
    // $ball.css("-ms-transform", "translate("+x+"px,-150px");
    // $ball.css("transform", "translate(100px,-150px");
    // animation-duration: 4s;
    // animation-delay: 2s;
    // $ball.css('animation-duration', '4s');
    // $ball.css('animation-delay', '2s');
    // $ball.animate({left: '100px'}, "slow");
    // $ball.animate({top: '-100px'}, "slow");
    // $ball.css("-webkit-transform", ball_translate);
    // $ball.css("-moz-transform", ball_translate);
    // $ball.css("-ms-transform", ball_translate);
    // $ball.css("transform", ball_translate);
    // $ball.css("visibility", "hidden");

};
/******************************************/
