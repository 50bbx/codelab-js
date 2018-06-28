/* 
 * Solution to CodeLab problem MAJORITY
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/majority/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

const arr = [2,1,2]

const count = Math.floor(arr.length/2)

const distinct = arr.filter((x, index) => arr.indexOf(x) !== index)

for(let single of distinct) {
    const currentElementCount = arr.filter(x => x === single).length

    if(currentElementCount > count) {
        return console.log(single)
    }
}