function reverseString(str) {
  let splitStr = str.split("");
  let reversStr = splitStr.reverse();
  let joinArray = reversStr.join("");
  return joinArray;
}
reverseString("hello"); //"olleh"


function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); //"olleh"
