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

const s = 'Hello World'

let wordFound = false
let length = 0
for(i = s.length - 1; i >= 0; i--) {
    if(s[i] === ' ' && !wordFound) {
        continue
    }

    if(s[i] === ' ' && wordFound === true) {
        break
    }

    if(s[i] !== ' ') {
        console.log(s[i])
        wordFound = true

        length++
    }
}

console.log(length)