/*function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverse("I am a good guy."));
*/
/*function swap(str) {
  let str2 = "";
  for (let i = 0; i <= str.length; i++) {
    //為毛不行
    if (str[i] === str[i].toUpperCase()) {
      str2 += str[i].toLowerCase();
    } else {
      str2 += str[i].toUpperCase();
    }
  }
  console.log(str2);
}
swap("Love you.");

/*function swap(str) {
  let str2 = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str2 += str[i].toLowerCase();
    } else {
      str2 += str[i].toUpperCase();
    }
  }
  console.log(str2);
}

swap("Aloha"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."*/

function isPrime(num) {
  let result = true;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
    }
  }
  console.log(result);
}
isPrime(1); // returns false
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
