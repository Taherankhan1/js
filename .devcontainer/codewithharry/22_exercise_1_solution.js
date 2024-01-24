let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessNumber = () => {
    let userGuess = prompt("Guess the number between 1 and 100:");
    attempts++;

    if (userGuess < secretNumber) {
        alert("The guessed number is lesser than the original number. Try again!");
        guessNumber();
    } else if (userGuess > secretNumber) {
        alert("The guessed number is greater than the original number. Try again!");
        guessNumber();
    } else {
        alert(`Correct! The original number was ${secretNumber}. It took you ${attempts} guesses.`);
    }
}

guessNumber();
