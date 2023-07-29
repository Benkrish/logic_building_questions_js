str = 'lol'
new_str = ''

function reverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    new_str += str[i]
  }
  return 0
}
function check(str, newstr) {
  if (str == newstr) {
    return true
  }
  return false
}

reverse(str)
ans = check(str, new_str)
console.log(ans)
