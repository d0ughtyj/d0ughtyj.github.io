console.log('score.js loaded');

// var locationPallino = '';
// var locationPlayer1 = '';
// var locationPlayer2 = '';
// var intGamesPlayed =1;
// var intScorePlayer1 =0;
// var intScorePlayer2 = 0;

/******************************************/
// $(document).ready(function(){
//
//     var checkScore = function(){
//       console.log('time to check score');
//     }
//
// });
/******************************************/

// /******************************************/
var checkWhoWon = function(){
  if(intScorePlayer1 == intScorePlayer2){

      whoWon = 'TIE';
      return whoWon;
    }else if(intScorePlayer1 > intScorePlayer2){

      whoWon = 'BLUE WON!';
      return whoWon;
    }else{

      whoWon = 'YELLOW WON!';
      return whoWon;
      }
    }
// /******************************************/

/******************************************/
var checkScore = function(){
// Math.abs()

  //intRoundsPlayed++;
  var numP1 = Number(locationPallino) -  Number(locationPlayer1);
  var numP2 = Number(locationPallino) -  Number(locationPlayer2);

  numP1 = Math.abs(numP1);
  numP2 = Math.abs(numP2);

  console.log('locationPallino: ' + locationPallino);
  console.log('Player1: ' + numP1 + ' Player2: ' + numP2);

    if (numP1 <= numP2){
        //blue
        intScorePlayer1++
        intRoundsPlayed++;
      }else{
      // yellow
        intScorePlayer2++
        intRoundsPlayed++
    }
  var games = intScorePlayer1 + intScorePlayer2;
  displayScore();
  displayStatus();

  console.log('intRoundsPlayed:' + intRoundsPlayed + ' games: ' + games) ;
  if (games == 10){
      var who = checkWhoWon();
      intRoundsPlayed = games;
      displayStatus();
      displayGameOver(who);
      modalGameWon();
  }
}
/******************************************/
