// alert('Hey Colin!');

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

var input1 = 8;
var input2 = 4;

function max(num1, num2){
    "use strict";

    if (num1 > num2) {
      return num1;
    }else {
      return num2;
    }

}
var biggestNum = max(input1, input2);

// console.log(biggestNum);
// console.assert(biggestNum === 8);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var input1 = 14;
var input2 = 6;
var input3 = 10;

function maxOfThree(num1, num2, num3){
    "use strict";

    var maxNum =  Math.max(num1, num2, num3);

    return maxNum;
}

var output = maxOfThree(input1, input2, input3);

// console.log(output);
// console.assert(output === 14);


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

//  got help with http://stackoverflow.com/a/13905291

function isVowel(char){
    "use strict";

    var vowels = ["a", "e", "i", "o", "u", " "];

    for(var i = 0; i < vowels.length; i++){
      if(char === vowels[i]){
        return true;
      }
    }
    return false;
}

// console.log(isVowel);

var isThisAVowel = isVowel('b');

// console.assert(isVowel('a') == true)
// console.assert(isVowel('b') == false)


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    console.log(phrase);
    var newPhrase = '';

    for(var i = 0; i < phrase.length; i++){
      console.log(phrase[i]);
      var char = phrase[i];
      if( isVowel(char) ){
        newPhrase = newPhrase + char;
      }else{
        newPhrase = newPhrase + char + "o" + char;
      }

    }

    return newPhrase;
}

// var translated = rovarspraket('this is fun');
// console.log(translated);
// console.assert(translated === 'tothohisos isos fofunon');


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


// help from http://stackoverflow.com/a/16751601

var addition = [2, 8, 4, 2].reduce(sum, 0);

function sum(a, b){
    "use strict";
    return a + b;
}

// console.log(addition);
// console.assert(addition === 16);

/* ************************************************************ */


function multiply(array) {
    "use strict";

  var sum=1;
  for (var i=0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}

var output = multiply([1,2,3,4])

// console.log(multiply([1,2,3,4]));
// console.assert(output === 24);





// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(rev){
    "use strict";
    return rev.split("").reverse().join("");

}

var output = reverse("rugby")

// console.log(reverse("rugby"));
// console.assert(output === "ybgur")



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var longest = words.sort(function (a, b) { return b.length - a.length; })[0];

    return longest;
}

var output = findLongestWord(['peanut', 'mint', 'spinach', 'pringles']);

// console.log(findLongestWord(['peanut', 'mint', 'spinach', 'pringles']));
// console.assert(output === 'pringles');




// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  "use strict";
  var longWords = [];

  for(var i=0; i<words.length; i++){

    if(words[i].length > i){
      longWords.push(words[i]);
    }
  }
  return longWords;
}

console.log(filterLongWords(['peanut', 'mint', 'spinach', 'pringles'],4));





 // FIRST SUBMIT BELOW, NEW WORK ABOVE*****************************************
 //****************************************************************************
 //****************************************************************************

/* with help from http://stackoverflow.com/a/6521513*/

// function filterLongWords(words, i){
//     "use strict";
//
//     var longWords = words.filter(function(str) { return str.length > i; });
//
//     return longWords;
// }
//
// var output = filterLongWords(['peanut', 'mint', 'spinach', 'pringles'],5);

// console.log(filterLongWords(['peanut', 'mint', 'spinach', 'pringles'],5));
// console.assert(output === (['peanut', 'spinach', 'pringles']));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

/* got help with http://stackoverflow.com/a/18619975*/


function charFreq(string){
    "use strict";
      var freq = {};

        for (var i=0; i < string.length; i++) {
        var character = string[i];
            if (freq[character]) {
              //  freq[character]++;
               freq[character] = freq[character] + 1
            } else {
               freq[character] = 1;
            }
        }

        return freq;

}

var end = charFreq ('abbabcbdbabdbdbabababcbcbab');

console.log(charFreq ('abbabcbdbabdbdbabababcbcbab'));
console.assert(end == {'a': 7, 'b': 14, 'c': 3, 'd': 3})
