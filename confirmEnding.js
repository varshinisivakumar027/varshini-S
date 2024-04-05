//Check if a string (first argument, str) ends with the given target string (second argument, target).
//without .endsWith() method.

function confirmEnding(str, target) {
    let cutOff = str.length - target.length;
    return (str.slice(cutOff) === target);
  }
  
  console.log(confirmEnding("Bastian", "n"));