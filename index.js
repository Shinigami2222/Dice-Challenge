
var rand1 = Math.floor(Math.random()*6);
var rand2 = Math.floor(Math.random()*6);


var diceFaces = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.getElementsByClassName("img1")[0].setAttribute("src",diceFaces[rand1]);
document.getElementsByClassName("img2")[0].setAttribute("src",diceFaces[rand2]);
var heading = ["1st Player Wins" , "2nd Player Wins" , "Draw"];
if(rand1 > rand2) {
  document.getElementsByTagName("h1")[0].textContent = heading[0];
} else if(rand2 > rand1) {
  document.getElementsByTagName("h1")[0].textContent = heading[1];
} else {
  document.getElementsByTagName("h1")[0].textContent = heading[2];
}
