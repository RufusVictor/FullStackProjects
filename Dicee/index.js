var n = [1, 2, 3, 4, 5, 6]
var p1=prompt("Enter Player 1 Name").slice(0,10)
var p2=prompt("Enter Player 2 Name").slice(0,10)
document.getElementById("P1").innerHTML=p1
document.getElementById("P2").innerHTML=p2
function myFunction() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1
    document.getElementById("i1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.getElementById("i2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if (randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="🎲 Draw 🎲";
    }
    else if (randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🎲 "+p1 +" Wins";
    }
    else if (randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML=p2 +" Wins 🎲";
    }
}