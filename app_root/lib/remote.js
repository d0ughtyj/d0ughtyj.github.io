console.log("remote.js loaded");
// https://api.myjson.com/bins/h7fsj
// http://myjson.com/api

// https://teamtreehouse.com/community/am-getting-a-console-error-xmlhttprequest-cannot-loadflickrs-api-no-accesscontrolalloworigin
// I want back an look over my code and I made 3 small errors and 2 big ones ; namely using ('document').ready()... and $.get instead of (document).ready()... and $.getJSON. .



// myjson GET Example
// 1. Create valid uri via POST
// 2. GET using newly created uri

$('document').ready(function(){

//****************************************//
var obj = {
  "gameCode": "AAAA",
  "player1Score": 0,
  "player2Score": 0,
  "pallinoBallLocation": 0,
  "player1BallLocation": 0,
  "player2BallLocation": 0,
  "turnNumber": 0,
  "roundNumber": 2,
  "angleThrow": 1,
  "throwForce": "hard",
  "gridRange": [
    20,
    40
  ],
  "temp": null
};
//****************************************//
// var obj = {
//     "key": "value",
//     "key2": "value2"
// };
var data = JSON.stringify(obj);
// ?pretty=1


$("#clickMe").click(function () {
    $.ajax({
        url: "https://api.myjson.com/bins",
        type: "POST",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, h7fsj) {

            // load created json
            $.get(data.uri, function (data, textStatus, h7fsj) {
                var json = JSON.stringify(data);
                $("#data").val(json);
            });
        }
    });
});
//****************************************//
$("#clickMePut").click(function () {
  var updatedObj = {
    "gameCode": "AAAA",
    "player1Score": 0,
    "player2Score": 0,
    "pallinoBallLocation": 5,
    "player1BallLocation": 5,
    "player2BallLocation": 0,
    "turnNumber": 0,
    "roundNumber": 2,
    "angleThrow": 1,
    "throwForce": "hard",
    "gridRange": [
      20,
      40
    ],
    "temp": null
  };
  // var updatedObj = {
  //   "pallinoBallLocation": 20,
  //   "player1BallLocation": 25,
  //   "player2BallLocation": 33
  // }
    var updatedData = JSON.stringify(updatedObj);
  // do update
  $.ajax({
      //url: data.uri,
      url: "https://api.myjson.com/bins/h7fsj",
      type: "PUT",
      data: updatedData,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data, textStatus, h7fsj) {
          var json = JSON.stringify(data);
          $("#data").val(json);
      }
    });
  });

//**************************************************//
$("#idButtonUpdate").click(function () {

  console.log("idButtonUpdate");
  var updatedObj = {
    "pallinoBallLocation": 99,
    "player1BallLocation": 99,
    "player2BallLocation": 99
  }
    var updatedData = JSON.stringify(updatedObj);

  $.ajax({
    url:"https://api.myjson.com/bins/",
    type:"POST",
    data: updatedData,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, h7fsj){
    }
  });
});







});//end ready
