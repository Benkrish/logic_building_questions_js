str = 'ben tennyson'
vow = 'aeiou'
let count = 0

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < vow.length; j++) {
    if (str[i] === vow[j]) {
      count++
    }
  }
}
console.log(count)

const unique = new Set()
count = 0
for (let i = 0; i < str.length; i++) {
  if (vow.includes(str[i])) {
    if (!unique.has(str[i])) {
      count++
      unique.add(str[i])
    }
  }
}
console.log(count)
