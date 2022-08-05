function isAgeEvenOrOdd(age){
    if(age%2===0){
        return true;
    }else{
        return false;
    }
}
let age = 23;
const evenOrOdd = isAgeEvenOrOdd(age);
console.log(evenOrOdd);