// This will check the letters guessed versus the random word selected

var Letter = require('./Letter');
//var Game = require('./Game');
var inArray = false;
var alreadyGuesseLetter = [];

function Word(chosenWord) {



    this.arrayGuessedLetters = [];
    this.wordArrray = []

    this.letterGuessed = function (letter) {

        this.arrayGuessedLetters.push(letter);
        alreadyGuesseLetter.push(letter);
        console.log(this.arrayGuessedLetters);
        console.log(this.wordArrray.split(""));
        console.log(alreadyGuesseLetter);


        for (var index in alreadyGuesseLetter) {

            if (letter === alreadyGuesseLetter[index]) {
                inArray = true;
            }
        }
        
        if(!inArray){
            this.compareArrays();
        }
        

    }

    this.compareArrays = function () {

      

//        for (var i = 0; this.arrayGuessedLetters.length > i; i++) {
//            for (var j = 0; this.wordArrray.length > j; j++) {




//                if (this.arrayGuessedLetters[i] === this.wordArrray[j]) {

                    console.log('du stuff');

//                }
//            }
//        }
    }

}




module.exports = Word;