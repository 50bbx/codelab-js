// n could be bigger than 2^64
function isPowerOfTwo(n) {
    
  if(!Array.isArray(n)) {
    n = new String(n).split('').map(x => parseInt(x))
  }
  
  let result = []
  
  let remainder = 0
  for(let i = 0; i < n.length; i++) {
    
    const current = remainder * 10 + n[i]
    
    if(current >= 2) {
      result[result.length] = parseInt(current / 2)
      
      remainder = current % 2
      
    } else {
      remainder = current
      result[result.length] = 0
    } 
  }
  
  if(remainder !== 0) {
    return 0
  }
  
  if(parseInt(result.join('')) === 1 && remainder === 0) {
    return 1
  }
  
  return isPowerOfTwo(result)
}
  
console.log(isPowerOfTwo('128'))
// console.log(isPowerOfTwo('202'))
// console.log(isPowerOfTwo('129'))
// console.log(isPowerOfTwo('39614081257132168796771975168'))