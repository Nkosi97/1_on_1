/* 
About Javascript
Javascript is a text based programming language,
that allows you to make web pages interactive.
JavaScript gives web pages interactive elements that engage a user.
JavaScript was created by Brendan Eich in September 1995.
*/

function find(str) {
  if (str == "Bomb") {
    return `Duck!!!`;
  } else {
    return `There is no bomb, relax`;
  }
} 
// console.log(find("Bomb"))

function myString(str) {
  return str.length;
}
// console.log(myString("Javascript"))

function bigNum(f, g) {
  var [x, y] = [f(), g()];
  if (x > y) {
    return "f";
  } else if (x < y) {
    return "g";
  }
  return "neither";
}
// console.log(bigNum(()=>10,()=>2))

function calc(l, w, h) {
  var volume = l * w * h;
  return volume;
}
// console.log(calc(5,5,5))

function convert() {
  var arr = [1, -6, 8, -4, 9, 7, -10];

  for (let i = 0; arr > 0; i++) {
  return arr[i] < 0
  }
 
  return arr;
}
// console.log(convert());
const numbers = [-1,-2,-3,-4,-5];
const pos = numbers.map( v => v * -1);

console.log(pos);

// function js_style()
// {
//  text.style.fontSize = "20pt";
//  text.style.fontFamily = "Comic Sans MS";
//  text.style.color = "red";
// }
