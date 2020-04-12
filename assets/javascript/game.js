var Option=["a","b","c","d","e"];
var win=0;
var lost=0;
var guess=3;
var letterSoFar="";
document.onkeyup=function(event){
    guess--;
    if(guess === 0){
        guess=3;
        letterSoFar="";
    }
    var userGuess=event.key.toLowerCase();
    var comuterGuess=Option[Math.floor(Math.random()*Option.length)];
    letterSoFar+=userGuess +","
        if(userGuess===comuterGuess){
            win++;
        }else lost++;
    var html =`<p>Guess what letter I'm thinking of</p>
    <p>Wins:${win}</p>
    <p>Losses:${lost}</p>
    <p>Guesses Left:${guess}</p>
    <p>Your Guesses So Far:${letterSoFar}</p>`
document.getElementById("game").innerHTML=html;
};