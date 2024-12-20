let numbers = [18, 10, 21, 5, 6, 13, 1, 14, 17
let names = ["margo", "kwyn ", "pat", "pau", "chel"];


let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);


let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted numbers in reverse:", sortedNumbers);


let sortedNames = names.sort();
console.log("Sorted names alphabetically:", sortedNames);
