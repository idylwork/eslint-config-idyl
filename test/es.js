
let number = (1 + 2)

// console.infoは許可
console.info(number)

// 未使用の変数も_から始まる変数は許可
const _te = new Date()

number = number ++

// コメント
// comment

// Switch文
switch (number) {
case 1:
  break
default:
  break
}

// If文
if (number === 2) {
  console.error(number === 2, [
    1,
    2,
    3
  ], { [number]: 2 })
}
