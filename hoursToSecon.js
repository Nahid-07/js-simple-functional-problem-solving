function getHoursToMinutes(hours){
    let hoursToMinuts = hours * 60;
    let minutesToSecond = hoursToMinuts * 60;
    return minutesToSecond;
}
let getHours = 1;
let getSecond = getHoursToMinutes(getHours);
console.log("Your hours to second result is :",getSecond);