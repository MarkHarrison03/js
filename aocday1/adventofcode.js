//advent of code 2021 day 1
//finding out how quickly the depth of a submarine increases.
//count the number of times a depth measurement increases from the previous
let increaseCounter = 0
let previousDepth = 0
function submarineDepthIncrease(currentDepth){
    if(currentDepth > previousDepth){
        increaseCounter++
    }
    previousDepth = currentDepth

}
var array = [];
const fs = require('fs')
fs.readFile('input.txt', 'utf-8', (err, data) => {

    array = data.split(/\r?\n/)
  for (let index = 0; index < array.length; index++) {
    submarineDepthIncrease(array[index])
  
}
console.log(increaseCounter )
    
})
