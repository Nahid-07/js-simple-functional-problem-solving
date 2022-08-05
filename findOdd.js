function oddsum(array){
    const myArray = [];
    let sum = 0;
    for(let i=0; i<array.length; i++){
        let element = array[i];
        if(element%2 !==0){
            sum+=element;
            myArray.push(element);
        }
    }
    console.log(myArray);
    return sum;
}
let numbers = [5, 7, 8, 10, 45, 30];
const getSumOfElememnt = oddsum(numbers);
console.log(getSumOfElememnt);