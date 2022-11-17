// random value generated
 var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
playername= localStorage.getItem("player_name")
var guess = 1;
var x = document.getElementById("guessField").value
// made for correct Guess
function submit(){  
     var x = document.getElementById("guessField").value;
      if(x == y) { alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN " + guess + " GUESS "); guess= 1; }
       else if(x > y)
      { guess++; alert("OOPS SORRY!! TRY A SMALLER NUMBER"); } 
      else{ guess++; alert("OOPS SORRY!! TRY A GREATER NUMBER") } }

// function for number guessed by user     
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1 );
}