str = 'this is this is repeated 2 times'
arr = str.split(' ')

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (arr[i] == arr[j]) {
      count++
      break
    }
  }
}
console.log(count)
