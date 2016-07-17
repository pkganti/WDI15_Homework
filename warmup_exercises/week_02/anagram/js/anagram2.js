var anagram = {

  arrayOfWords: ["enlists","google","inlets","banana"],
  sort: function(word){
  	return word.split("").sort().join("");
  },

  compare: function(word, potentialAnagram){
  	word=word.toLowerCase();
  	potentialAnagram=potentialAnagram.toLowerCase();

  		if(anagram.sort(word)===anagram.sort(potentialAnagram)){
  			return true;
  		}
  		else{
  			return false;
  		}
  	},

  	detectAnagrams: function(word){
  		var anagrams = [];
  		for(var i=0; i<anagram.arrayOfWords.length; i++){
  			var potentialAnagram=anagram.arrayOfWords[i];
  			if(anagram.compare(word,potentialAnagram)){
  				anagrams.push(potentialAnagram);
  			}
  		}
  		console.log(anagrams);
  	}


};
