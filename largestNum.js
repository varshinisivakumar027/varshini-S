//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let newArr=[];
  arr.map(e=>{
      let temp = e[0];
      for(let i=0;i<e.length;i++){
        if(e[i]>temp){
          temp = e[i];
        }
      }
      newArr.push(temp)
  })
  return newArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));