function leapYear(year){
    if(year%4===0){
        return true
    }else{
        return false;
    }
}
let years = 2060;
const yearTobeCalculated = leapYear(years);
console.log(yearTobeCalculated);