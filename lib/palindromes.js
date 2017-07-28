function isPalindrome(s) {
  s = s.replace(/\s/g, '')
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;

}

module.exports = isPalindrome;
console.log(isPalindrome("a man a plan a canal panama"));
console.log(isPalindrome);

// var s = "a man a plan a canal panama";


// s = s.replace(/\s/g, '');


// console.log(s);