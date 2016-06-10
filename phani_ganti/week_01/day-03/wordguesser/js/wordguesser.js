var wordArr = ['F','O','X'];//Fixed array containing letters which have to be searched for
var guessArr = [];//Guess array which will contain the matching letters from guesses
var fixSize = wordArr.length;
var guessSize = guessArr.length;

var guessLetter = function(letter){

	for(var i=0; i<wordArr.length; i++)
		{
			if(wordArr[i]===letter){
				console.log("Congratulations you have guessed a letter");
				wordArr.splice(i,1);
				//guessArr.push(letter);
				if(wordArr.length===0){
					console.log("You've won the word guesser !!");
				}

				console.log(wordArr.length);

			}
			return true;
		}
		guessArr.push(letter);
}
