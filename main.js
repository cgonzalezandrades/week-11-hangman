//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.

var Game = require('./Game.js');
var inquirer = require('inquirer');


var Hangman = new Game();

inquirer.prompt([
    {
        name: 'question',
        message: 'Would you like to guess a Word ?',
        type: 'confirm',
    },

]).then(function (user) {

    //    console.log(user.question);

    if (user.question) {
        Hangman.createGame();
        PromptPlayer();




    }

    function PromptPlayer() {
        inquirer.prompt([

            {
                name: 'letterguessed',
                message: 'Choose a letter',
                type: 'input',
            }

        ]).then(function (playingGame) {


            Hangman.reaminingGuesses--;

            if (Hangman.reaminingGuesses > 6) {
                Hangman.chosenLetter(playingGame.letterguessed);


                
                
                PromptPlayer();
            }
        });


    }

})


//when I run main is going to:
//1 - create a new game
//2- game is going to assign the new word randomly
//3 -

//{
//        name: 'word',
//        message:'Choose a letter',
//        when: function (user) {
//            return user.question === true;
//        },
//        type:'input',
//    }