
//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);
let thirdCodePoint = inputString1.charCodeAt(2); 

// Task 2

let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);

// Task 3
let inputString2 = "Launch";
let firstCP = inputString2.charCodeAt(0);     
let lastCP = inputString2.charCodeAt(inputString2.length - 1);

let swappedString =
  String.fromCharCode(lastCP) +                       
  inputString2.slice(1, inputString2.length - 1) +    
  String.fromCharCode(firstCP);    


// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
