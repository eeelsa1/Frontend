/* 落地問題
function distance(h, n) {
  let sum = 0;
  sum += h;
  if (n > 1) {
    for (let i = 1; i <= n - 1; i++) {
      h = h / 2;
      sum = sum + h * 2;
    }
    console.log(sum);
  } else {
    console.log(sum);
  }
}
console.log(distance(100, 1));
console.log(distance(100, 2));
console.log(distance(100, 3));
console.log(distance(100, 4));
console.log(distance(500, 7));
*/
