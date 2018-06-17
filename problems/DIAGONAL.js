/* 
 * Solution to CodeLab problem DIAGONAL
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/diagonal/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

 const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
 ]

function getAntiDiagonals(matrix) {
    let antiDiagonals = []
    const width = matrix[0].length
    const height = matrix.length

    for(let i = 0; i <= height - 1; i++) {
        for(let j = 0; j <= width -1; j++) {
            if(i !== 0 && j !== width - 1) {
                continue;
            }
            
            let antiDiagonal = []
            let [y, x] = [i, j]
            while(x >= 0 && y < height) {
                antiDiagonal.push(matrix[y][x])
                x -= 1
                y += 1
            }

            antiDiagonals.push(antiDiagonal)
       }
    }

    return antiDiagonals
}


console.log(getAntiDiagonals(matrix))
