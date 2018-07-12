
var arrOfWords = ["beach", "cat", "mango", "tree", "marketing","grant","peanut",
"apple","bannana","potato","syllabus","rapper","people","rat","dog","cat","squawk"];

var inputLetter = ""

var h1;

var totalWins = 0;

var totalLosses = 0;
var scoreTracked = false;

var hangman = {

    "word": "",
    "len": 0,
    "wordArr": [],
    "wordWithBlanks": [],
    "correctLetters": [],
    "wrongLetters": [],
    "attempts": 12,

    setLen: function (len) {
        this.len = len;
    },
    setWord: function (word) {
        this.word = word;
    },
    setWordArr: function (wordArr) {
        this.wordArr = wordArr;
    },
    setWordWithBlanks: function (wordWithBlanks) {
        this.wordWithBlanks = wordWithBlanks;
    },
    setCorrectLetters: function (correctLetters) {
        this.correctLetters = correctLetters;
    },
    setAttempts: function (attempts) {
        this.attempts = attempts;
    },
    setWrongLetters: function (word) {
        this.word = word;
    },


}

function chooseRandomWord() {
    var item = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    return item;
}

function wordToArr(word) {
    var length = word.length;
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = word[i]
    }
    return arr;
}

function wordToBlanks(word) {
    var length = word.length;
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = "_";
    }

    return arr;
}

function validateNewLetter(userGuess, hangman) {
    var arrAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lenAlphabet = arrAlphabet.length;
    var lenCorrect = hangman.correctLetters.length;
    var lenWrong = hangman.wrongLetters.length;
    var inIt = false;

    for (var i = 0; i < lenAlphabet; i++) {
        if (userGuess == arrAlphabet[i]) {
            inIt = true;
        }
    }
    if (inIt == false) {
        alert("Invalid Input: Input must be a letter");
        return false;
    }

    for (var i = 0; i < lenCorrect; i++) {
        if (userGuess === hangman.correctLetters[i]) {
            alert("Guess a letter you have not guessed yet");
            return false;
        }
    }
    for (var i = 0; i < lenWrong; i++) {
        if (userGuess === hangman.wrongLetters[i]) {
            alert("Guess a letter you have not guessed yet");
            return false
        }
    }
    return true;
}

function runGame(hangman) {
    if (validateNewLetter(inputLetter, hangman) == true) {
        var blank = replaceBlank(hangman);
        h1.setWordWithBlanks(blank);
        blankArrWithSpaces = blankToString(hangman);
        document.getElementById("blanks").innerHTML = blankArrWithSpaces;

        correct = correctToString(hangman);
        document.getElementById("correct").innerHTML = "Correct Letters: " + correct;

        wrong = wrongToString(hangman);
        document.getElementById("wrong").innerHTML = "Wrong Letters: " + wrong;

        youWin = testWinner(hangman);
        if (youWin == false && hangman.attempts != 0) {
            updateAttempts(hangman);
            document.getElementById("attempts").innerHTML = "Attempts Remaining: " + hangman.attempts;
        }

    }
}
function testWinner(hangman) {
    var equal = true
    for (var i = 0; i < hangman.len; i++) {
        if (hangman.wordArr[i] != hangman.wordWithBlanks[i]) {
            equal = false;
        }
    }
    if (hangman.attempts >= 1 && equal == true) {
        blankArrWithSpaces = blankToString(hangman);
        document.getElementById("blanks").innerHTML = blankArrWithSpaces;

        correct = correctToString(hangman);
        document.getElementById("correct").innerHTML = "Correct Letters: " + correct;

        document.getElementById("winnerLabel").innerHTML = "You won! Try your luck again by starting a new game!";

        if (scoreTracked == false) {
            totalWins += 1;
            scoreTracked = true

        }

        document.getElementById("winTotal").innerHTML = "Total Wins:" + totalWins;



    }
    if (equal == false && hangman.attempts <= 1) {
        document.getElementById("winnerLabel").innerHTML = "You Lost! Try your luck again by starting a new game!";
        if (scoreTracked == false) {
            totalLosses += 1;
            scoreTracked = true

        }

    }
    return equal;

}
function updateAttempts(hangman) {
    hangman.attempts = hangman.attempts - 1;

}


function replaceBlank(hangman) {
    var inIt = false
    var blank = hangman.wordWithBlanks;
    var word = hangman.wordArr
    for (var i = 0; i < hangman.len; i++) {
        if (inputLetter == hangman.word[i]) {
            inIt = true;
            blank[i] = inputLetter;
        }
    }
    if (inIt == true) {
        hangman.correctLetters.push(inputLetter);
    }
    else {
        hangman.wrongLetters.push(inputLetter);
    }
    return blank;
}
function blankToString(hangman) {
    string1 = ""
    var blank = hangman.wordWithBlanks;
    for (var i = 0; i < hangman.len; i++) {
        if (i == hangman.len - 1) {
            string1 += blank[i];
        }
        else {
            string1 += blank[i] + " ";
        }
    }
    return string1;
}

function correctToString(hangman) {
    string1 = ""
    var correct = hangman.correctLetters;
    for (var i = 0; i < correct.length; i++) {
        if (i == correct.length - 1) {
            string1 += correct[i];
        }
        else {
            string1 += correct[i] + " ";
        }
    }
    return string1;
}

function wrongToString(hangman) {
    string1 = ""
    var wrong = hangman.wrongLetters;
    for (var i = 0; i < wrong.length; i++) {
        if (i == wrong.length - 1) {
            string1 += wrong[i];
        }
        else {
            string1 += wrong[i] + " ";
        }
    }
    return string1;
}


function buildGame() {
    //NEED TO RESET GLOBAL VARIABLES

    document.getElementById("correct").innerHTML = "Correct Letters: ";
    document.getElementById("wrong").innerHTML = "Wrong Letters: ";
    document.getElementById("attempts").innerHTML = "Attempts Remaining: 12";
    document.getElementById("winnerLabel").innerHTML = "";
    document.getElementById("winTotal").innerHTML = "Total Wins:" + totalWins;
    document.getElementById("lossTotal").innerHTML = "Total Losses: " + totalLosses;
    document.getElementById("directions").innerHTML = "Click any letter on your keyboard to begin guessing!";



    scoreTracked = false;
    h1 = hangman;

    h1.word = "";
    h1.len = 0;
    h1.wordArr = [];
    h1.wordWithBlanks = [];
    h1.correctLetters = [];
    h1.wrongLetters = [];
    h1.attempts = 12;

    var word = chooseRandomWord(arrOfWords);
    var len = word.length;
    var arrWord = wordToArr(word);
    var blankWord = wordToBlanks(word);
    var blankString = blankToString(blankWord);


    h1.setLen(len);
    h1.setWord(word);
    h1.setWordArr(arrWord);
    h1.setWordWithBlanks(blankWord);

    var blankOutput = blankToString(h1);
    document.getElementById("blanks").innerHTML = blankOutput;


}

document.getElementById("startGame").onclick = buildGame;

document.onkeyup = function (event) {

    inputLetter = event.key;
    runGame(h1);   
}


