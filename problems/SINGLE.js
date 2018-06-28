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

const arr = [1,2,2,3,1]

const toRemove = arr.filter((x, index) => arr.indexOf(x) !== index)
const singleValue = arr.filter((el) => {
    return toRemove.indexOf(el) < 0
})

if(singleValue !== undefined) {
    console.log(singleValue[0])
}