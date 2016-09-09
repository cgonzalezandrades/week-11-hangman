//game.js file will randomly select a word for the player

var Word = require('./Word');
var wordList = ["carlos", 'vanessa', 'ligia'];
var letterUser = [];
var random = Math.floor((Math.random() * 3));
var chosenWord;

var word = new Word();



function Game() {
    this.reaminingGuesses = 0;
    this.hits = 0;
    this.misses = 0;

    this.chosenLetter = function (letter) {

        word.letterGuessed(letter);

        console.log(letter);
    }

    this.createGame = function () {
        this.reaminingGuesses = 10;

        chosenWord = wordList[random];
        word.wordArrray = chosenWord;



        console.log("your reamining Guesses are: " + this.reaminingGuesses);
        console.log('Here is how big the word you need to guess is:');





    }
}



module.exports = Game;

//1 Assign new word randomly
//2 increase hit a misses
//3 evaluate reamining guesses
//4 print word spaces