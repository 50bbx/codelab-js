/* 
 * Solution to CodeLab problem STEPNUM
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/stepnum/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */
const n = 10
const m = 20
const solutions = []

for(i = n; i <= m; i++) {
    const arr = new Number(i).toString().split('').map(x => parseInt(x))

    let stepping = true
    let direction = 0
    arr.reduce((acc, el) => {

        if(acc === null) {
            return el
        }

        if(el - acc === 1 && direction === 0) {
            direction = 1
        }

        if(el - acc === -1 && direction === 0) {
            direction = -1
        }

        stepping = stepping && el - acc === direction && direction !== 0

        return el
    }, null)

    if(stepping){
        solutions.push(i)
    }
}

console.log(solutions)