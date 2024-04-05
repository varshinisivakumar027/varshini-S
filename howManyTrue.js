//to return number of trues' in given arr.
function howManyTrue(arr){
    return (arr.filter(e => e===true).length)
}

console.log(howManyTrue([true,"tuee",false,true,true,false,false,true,true]));