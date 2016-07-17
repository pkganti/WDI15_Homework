// var sortWords = function(word){
// 	return word.split("").sort().join("");
// };
//
// var anagramDetector = function(word, list){
// 	myList = list;
// 	myListSize = myList.length;
//   for(var i=0; i<myListSize; i++){
// 		if(sortWords(word)===sortWords(myList[i])){
// 			console.log("The anagram is "+myList[i]);
// 		}
// 	}
// };

var anagram = {

  arrayOfWords: ["enlists","google","inlets","banana"],
  sort: function(word){
  	return word.split("").sort().join("");
  },

  detector: function(word, arrayOfWords){
  	myList = arrayOfWords;
  	myListSize = myList.length;
    for(var i=0; i<myListSize; i++){
  		if(sort(word)===sort(myList[i])){
  			console.log("The anagram is "+myList[i]);
  		}
  	}
  }

};
