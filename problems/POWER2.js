/* 
 * Solution to CodeLab problem POWER2
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/power2/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

const input = 5435
for(let p = 2; p <= Math.sqrt(input); p++) {
    for(let a = 2; Math.pow(a, p) <= input; a++) {
        if(Math.pow(a, p) === input) {
            console.log(true, a, p)
            return
        }
    }
}