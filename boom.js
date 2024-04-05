//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.Otherwise, return "there is no 7 in the array".
function boom(arr){
    let split = arr.map(e=> e.toString().split(""));
    let result = split.map(e=>e.includes("7"));
    return result.includes(true)==true? "Boom!":"there is no 7 in the array";
}
console.log(boom([2, 55, 60, 97, 86]));
