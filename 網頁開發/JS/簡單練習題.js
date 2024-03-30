//isUpperCase的函式
function isupperCase(str) {
  if (str.length == 0) {
    return false;
  }
  if (str[0] == str[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isupperCase("AbcD"));

//isAllUpperCase的函式

function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      //return true;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isAllUpperCase("BaC"));

//position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。

function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return i + " " + str[i];
    } else {
      return -1;
    }
  }
}
console.log(position("AbC"));

//編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數

function findSmallCount(array, number) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      sum += 1;
    }
  }
  return sum;
}
console.log(findSmallCount([1, 2, 3], 10));

//編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。
function findSmallerTotal(array, number) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(findSmallerTotal([1, 0, 3], 3));

//編寫一個名為stars的函式，功能為按以下模式打印出星星層：
function star(number) {
  let str = "";
  for (let i = 1; i <= number; i++) {
    str += "*";
    console.log(str);
  }
}
star(4);

//編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
function star2(number) {
  let str = " ";
  for (let i = 1; i <= number; i++) {
    str += "*";
    console.log(str);
  }
  for (let j = number; j > 1; j--) {
    str = str.substring(0, j);
    console.log(str);
  }
}
star2(5);
