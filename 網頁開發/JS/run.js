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
