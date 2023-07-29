// str = ['k', 'r', 'i', 's', 'h', 'n', 'a']
let str = 'krishna'
let newstr = ''
for (let i = str.length - 1; i >= 0; i--) {
  newstr += str[i]
}
console.log(newstr)

let new_str = ''
function reverse(str) {
  new_str = str.split('').reverse().join('')
  return new_str
}
str = 'this is  ben'
rev = reverse(str)
console.log(rev)
