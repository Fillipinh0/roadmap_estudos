let varA = "A"
let varB = "B"
let varC = "C"

let salvA = varA

varA = varB
varB = varC
varC = salvA

console.log(varA, varB, varC)