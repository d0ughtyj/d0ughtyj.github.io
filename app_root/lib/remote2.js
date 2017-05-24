

$("#idButton2").click(function () {
  console.log('idButton2 loaded');
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://api.myjson.com/bins/h7fsj',true);
  ourRequest.setRequestHeader('content-type','application/json; charset=utf-8')

  ourRequest.onLoad= function(){
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData);
  renderHTML(ourData);
  }
  ourRequest.send();

});

function renderHTML(data){
  console.log('renderHTML loaded');
  var htmlString = "";
  $('#idSection1').text(data);
}
