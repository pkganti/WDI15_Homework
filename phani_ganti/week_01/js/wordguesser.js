
var wordArr = ['F','O','X'];//Fixed array containing letters which have to be searched for
var guessArr = [];//guess array which will contain the matching letters from guesses
var fixSize = wordArr.length;
var guessSize = guessArr.length;


var guessLetter = function(letter){
	var fixArr = wordArr;
  //The below loop iterates over the length of the fixed array and compares the guess letter
  //If the guess letter is present in the array, it then logs a success message and deletes that letter from fixed array
  //If not found it simply asks user to enter another guess
  //At the end if the fixed array's length is 0 which means the user won
	for(var i=0; i<fixArr.length; i++){
		if(fixArr[i]===letter){
			guessArr.push(fixArr[i]);
			fixArr.splice(i,1);
			console.log(fixArr);
			console.log("Congratulations, you've found one letter");
		}
	}
	if(fixArr.length===0){
		console.log("Congratulations you've won");
	} else {
		console.log("Play your next move");
	}
}
