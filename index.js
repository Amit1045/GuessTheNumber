let randomNum = parseInt(Math.random() * 100 + 1);
const Submitbutton = document.querySelector(".sub")
let GuessedNumber = document.querySelector('.NumberComparison');
const result = document.querySelector('.result')
const Userguess = document.querySelector(".yourGuess")

let remains = 0;
let moves = [];
document.querySelector(".container").addEventListener('click', function (e) {
    e.preventDefault();
})

Submitbutton.addEventListener("click", function (event) {
    let userInput = document.getElementById("guesstext").value;
    checkValidInput(userInput)
    document.getElementById("guesstext").value = '';
}, false)

function checkValidInput(userInput) {

    if (isNaN(userInput)) {
        alert("Not a Number");
    } else if (userInput > 100) {
        alert("Enter Number less than 100");
    } else if (userInput <= 0) {
        alert("Enter more than 0");
    } else {
        moves.push(userInput);

        if (userInput < randomNum) {
            GuessedNumber.innerHTML = `Guess higher Number`;
        } else if (userInput > randomNum) {
            GuessedNumber.innerHTML = `Guess lower Number`;
        } else {
            // User guessed the right number
            result.innerHTML = `🎉 Congratulation, You guessed the right answer! 🎉`;
            document.getElementById("guesstext").disabled = true;
            Restart();
        }

        countMoves(moves);  // Call this after every guess
    }
}

function countMoves(x) {
    if (x.length < 10 && x[x.length - 1] != randomNum) {
        result.innerHTML = `Remains: ${10 - x.length}`;
        Userguess.innerHTML = `Guesses: [${x}]`;
    } else if (x[x.length - 1] != randomNum) {
        Userguess.innerHTML = `Guesses: [${x}]`;
        ShowResult();
        Restart();
        document.getElementById("guesstext").disabled = true;
    }
}

function ShowResult() {
    result.style.color = 'white';
    result.innerHTML = `The correct number was: ${randomNum}`;
}

function Restart() {
    GuessedNumber.innerHTML = `Click here to restart the game`;
    GuessedNumber.addEventListener("click", function () {
        location.reload();
    });
}
