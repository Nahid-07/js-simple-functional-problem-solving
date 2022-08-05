// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function getMinute(hours){
    let result = hours * 60;
    return result;
}
let hours = 2.3;
const minute = getMinute(hours);
console.log("your hours to minutes result is = " , minute ,"min");