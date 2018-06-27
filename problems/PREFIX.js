/* 
 * Solution to CodeLab problem PREFIX
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/prefix/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */


const input =  ['zebra', 'dog', 'duck', 'dove'];

const m = new Map()
for(let str of input) {
    const arr = str.split('')
    
    for(let i = 0; i < arr.length; i++) {
        const currIdx = arr.slice(0, i + 1).join('')

        if(m.has(currIdx)) {
            m.set(currIdx, false)
        } else {
            m.set(currIdx, arr.join(''))
        }
    }
}

let prefixes = []
for(let str of input) {

    const arr = str.split('')

    for(let i = 0; i < arr.length; i++) {
        const currIdx = arr.slice(0, i + 1).join('')

        if(m.has(currIdx) && m.get(currIdx)) {
            prefixes.push(currIdx)
            break;
        }
    }
}

console.log(prefixes)\