//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findWordLength(str) {
  let words = str.split(" ");
  let wordLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > wordLength) {
      wordLength = words[i].length;
    }
  }
  return wordLength;
}

findWordLength("A positive mindset brings positive things");

//run time complexity is Linear O(n)
//space complexity is Linear O(n)


//____________________________________________________________________________________



//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function uniChar(str) {
  var word = {};
  for (var i = 0, len = str.length; i < len; i++) {
    if (word[str[i]] != null) {
      word[str[i]] = 1;
      return false;
    } else {
      word[str[i]] = 0;
    }
  }
  return true;
}

uniChar("helloo there");

//run time complexity is Linear O(n)
//space complexity is Linear O(n)
