const n = "00000000000000000000000000000011"

function revBits(n) {
  
  let sum = 0
  for(let i = 0; i < n.length; i++) {
    sum += parseInt(n[i])*(2**i)
  }
  
  return sum
}


console.log(revBits(n))