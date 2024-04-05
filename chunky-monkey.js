//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkIt(arr,num){
    const final = [];
    while(arr.length != 0){
        final.push(arr.splice(0,num));
    }
    return final;
}
console.log(chunkIt([0, 1, 2, 3, 4, 5, 6], 3))