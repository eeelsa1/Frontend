function printEvery3() {
  let sum = -2;
  for (let i = 1; i++; ) {
    sum += 3;
    if (sum > 88) {
      break;
    }
    //return sum;
    console.log(sum);
  }
}
printEvery3();
