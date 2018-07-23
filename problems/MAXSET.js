function splitArr(arr) {

  let index = 0
  const splittedArray = [[]]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      index++
      splittedArray[index] = []
      continue
    }

    splittedArray[index].push(arr[i])
  }

  let sum = 0
  let winner = 0
  for( let j = 0; j < splittedArray.length; j++) {
    const segment = splittedArray[j]

    const segmentSum = segment.reduce((acc, el) => {
      return acc + el
    }, 0)
    
    if(segmentSum === sum) {
      if(segment.length > splittedArray[winner].length) {
        winner = j
        continue
      }
    }

    if(segmentSum > sum) {
      winner = j
      sum = segmentSum
    }
  }
  
  return splittedArray[winner]
}

console.log(splitArr([1,2,5,-7,2,3]))