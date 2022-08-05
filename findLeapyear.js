/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

function findLeapYear(array){
    const myArray = [];
    for(let i = 0; i< array.length;i++){
        let element = array[i];
        if(element%4 === 0){
            myArray.push(element);
        }
    }
    return myArray;
}
let years = [2023,2024,2025,2028,2030]
const findingyear = findLeapYear(years);
console.log(findingyear)