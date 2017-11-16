// can accidently orride varibles
var nameVar = 'Phil'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

// use let const

// let can be reassigned but not redifined
let nameLet = 'Phil'
nameLet = 'Mike'
console.log('nameLet', nameLet)

// const is immutable
const nameConst = 'Phil'
console.log('nameConst', nameConst)

function getPetName() {
  var petName = 'smokey'
  return petName
}

const petName = getPetName()
console.log(petName)

var fullName = 'Phil Morgan'
let fullName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName)
}

console.log(firstName);
