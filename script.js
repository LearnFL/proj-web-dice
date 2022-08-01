
document.addEventListener("DOMContentLoaded", function(event) {
  var choice1 = Math.floor((Math.random() * 6)+1);
  var path1 ='./images/dice'+choice1+'.png';
  var choice2 = Math.floor((Math.random() * 6)+1);
  var path2 ='./images/dice'+choice2+'.png';
  document.querySelector(".img1").setAttribute("src", path1);
  document.querySelector(".img2").setAttribute("src", path2);
  if (choice1 > choice2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!"
  }else if (choice2 > choice1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"
    document.querySelector('h1').style.marginLeft='10%';
  }
  else{
    document.querySelector('h1').innerHTML = "⚔️ Draw!"
  }
});

function myReload () {
  window.location.reload(false);
  return false;
}
