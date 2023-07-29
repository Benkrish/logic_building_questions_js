const str = 'capitalize words in a string'
const capitalized = str.replace(/\b\w/g, (match) => match.toUpperCase())
console.log(capitalized)
