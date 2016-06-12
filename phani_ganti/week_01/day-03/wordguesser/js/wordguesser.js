var wordArr = ['G', 'O', 'O', 'G', 'L', 'E'];
var guessArr = [];
rewardAmt = 0;

var guessLetter = function(letter) {

    if (guessArr.length <= 5) {

        if (!(guessArr.includes(letter))) {

            var index = []; //Declared an Index variable of type array to hold all the guess letter indices
            var fixSize = wordArr.length; //This is to check if the guess is a wrong one.

            //The below for loop iterates through the word array to find the letter and pushes the index of the gound letter to the index array variable.
            for (var i = 0; i < wordArr.length; i++) {
                if (wordArr[i] === letter) {
                    index.push(i);
                }
            }

            //The below if condition is checking the length of the index array to check if the guess is right. If the guess is right the size will obviously be greater than zero.
            if (index.length > 0) {
                console.log("Congratulations you've guessed a letter right");
            }

            //The below for loop iterates through the wordArr to check the index and splice the elements which are found
            for (var j = index.length - 1; j >= 0; j--) {
                wordArr.splice(index[j], 1);
            }

            rewardAmt = rewardAmt + ((Math.random() * 100) * index.length);
            console.log(rewardAmt);

            //This if condition checks the length of wordArr and it equals zero mean the user won the word guesser game.
            if (wordArr.length === 0) {
                console.log("You've won the word guesser !!");
            }

            //This if condition checks the wordArr length for a wrong guess.
            if (fixSize === wordArr.length) {
                console.log("Wrong guess... try another time")
                rewardAmt = rewardAmt - (Math.random() * 100);
                if (rewardAmt < 0) {
                    rewardAmt = 0;
                }
            }
            guessArr.push(letter);
            console.log("The word array is: " + wordArr);
            console.log("The guess made are: " + guessArr);
            console.log("You've won " + Math.round(rewardAmt) + " Dollars.");
        } else {
            console.log("You've already guessed the letter");
        }
    } else {
        console.log("You've reached the maximum guesses");
    }
}
