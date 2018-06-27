/* 
 * Solution to CodeLab problem COLORFUL
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/colorful/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

const a = 3245
const b = 23

const arr = new String(a).split('')

const all = arr.reduce((acc, el, index) => {
    const curr = arr.slice(index, arr.length)
    return [...acc, ...curr.map((el, index2) => {
        return curr.slice(0,index2 + 1).join('')
    })]
}, []).map(x => x.split('').map(x => parseInt(x)).reduce((acc, el) => acc * el, 1))

let result = 1
all.map((el, index) => {
    if(all.indexOf(el) !== index) {
        result = 0
    }
})

console.log(result)
