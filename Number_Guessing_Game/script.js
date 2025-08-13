const minN = 1;
const maxN = 100;
const result = Math.floor(Math.random() * (maxN - minN + 1) + minN);

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minN} and ${maxN}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    else if(guess < minN || guess > maxN) {
        window.alert("Please enter a valid number.");
    }
    else {
        attempts++;
        if(guess < result) {
            window.alert("TOO LOW! TRY AGAIN.");
        }
        else if(guess > result) {
            window.alert("TOO HIGH! TRY AGAIN.");
        }
        else {
            window.alert(`CONGRATULATIONS! YOU GUESSED THE NUMBER ${result} IN ${attempts} ATTEMPTS.`);
            running = false; // End the game
        }
    }
}