let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = Number(prompt("請輸入你的猜測數字！(" + n1 + "~" + n2 + ")"));
  if (guess < n1 || guess > n2) {
    alert("無效猜測，請重新輸入範圍內的數字");
    continue;
  }

  if (guess == answer) {
    alert("你猜對囉！" + answer);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
