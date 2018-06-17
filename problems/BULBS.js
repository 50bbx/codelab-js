/* 
 * Solution to CodeLab problem BULBS
 * 
 * You can find the problem here: https://codelab.interviewbit.com/problems/bulbs/
 * 
 * This source code is licensed under the GNU v3 GENERAL PUBLIC LICENSE found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * https://github.com/50bbx/codelab-js
 */

let lightBulbs = [0,1,0,1]
let count = 0
while(someLightsAreOff(lightBulbs)) {

    const firstLightOff = lightBulbs.indexOf(0)

    lightBulbs = pressSwitch(firstLightOff, lightBulbs)

    count++
}

function someLightsAreOff(lightBulbs) {
    return lightBulbs.indexOf(0) !== -1
}

function pressSwitch(index, lightBulbs) {
    for(let i = index; i < lightBulbs.length; i++) {
        lightBulbs[i] = 1 - lightBulbs[i]
    }

    return lightBulbs
}

console.log(count)