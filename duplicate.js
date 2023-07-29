str = 'krishnaaaai'
str1 = ''
const unique = new Set()

for (let i = 0; i < str.length; i++) {
  if (str.includes(str[i])) {
    if (!unique.has(str[i])) {
      str1 += str[i]
      unique.add(str[i])
    }
  }
}
console.log(str1)
