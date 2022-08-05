function getMinute(hours){
    let result = hours * 60;
    return result;
}
let hours = 2.3;
const minute = getMinute(hours);
console.log("your hours to minutes result is = " , minute ,"min");