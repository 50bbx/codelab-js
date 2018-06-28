/* 
 * Solution to CodeLab problem LENGTHLAST
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/lengthlast/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

const a = [1, 5, 3]
const k = 2

let result = 0

for(i = 0; i < a.length; i++) {
    for(j = i + 1; j < a.length; j++) {
        if(Math.abs(a[i] - a[j]) === k){
            result = 1
            break
        }
    }
    if(result) {
        break   
    }
}

console.log(result)