/* 
 * Solution to CodeLab problem REACH
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/reach/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

function move(a,b) {
    const [xa,ya] = a
    const [xb,yb] = b

    const distance = [Math.abs(xa-xb),  Math.abs(ya-yb)]

    const diagonalMoves = Math.max(...distance)
    
    const remainingMoves  = Math.max(...distance.map(x => x - diagonalMoves))

    return diagonalMoves + remainingMoves
}

const destinations = [[0,0], [1,1], [1,2]]

let totalMoves = 0
for(let i = 0; i < destinations.length - 1; i++) {
    totalMoves += move(destinations[i], destinations[i+1])
}

console.log(totalMoves)
