function palindrome(str) {
  let regx = /[^a-zA-Z0-9]/g
  let replaceStr = str.replace(regx, '').toLowerCase();
  let reverseStr = [...replaceStr].reverse().join('');
  return (replaceStr === reverseStr) ? true : false
}
