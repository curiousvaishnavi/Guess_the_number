const max=prompt("Enter the maximum number for the guessing game:");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess a number between 1 and " + max + ":");
while(true){
    if(guess=="quit"){
        alert("Game over! You quit the game.");
        break;
    }
    if(guess==random){
        alert("Congratulations! You guessed the number " + random + " correctly.");
        break;
    } else if(guess<random){
        guess=prompt("Too low! Try again. Guess a number between 1 and " + max + ":");
    } else {
        guess=prompt("Too high! Try again. Guess a number between 1 and " + max + ":");
    }
}