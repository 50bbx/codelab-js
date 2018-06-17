/* 
 * Solution to CodeLab problem PRIMESUM
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/primesum/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

const num = 100
const possibleAddends = getListOfPrimeUnder(num)

const solutions = []
for(let i = 0; i < possibleAddends.length; i++) {
  const secondAddend = num - possibleAddends[i]

  if(possibleAddends.indexOf(secondAddend) !== -1) {
    solutions.push([possibleAddends[i], secondAddend])
  }
}

console.log(solutions[0])

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false
    }
  }

  return true
}

function getListOfPrimeUnder(num) {
  arr = []
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      arr.push(i)
    }
  }

  return arr
}