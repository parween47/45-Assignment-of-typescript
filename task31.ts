// Ordinal Numbers: Ordinal numbers indicate their position in a array, 
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal 
// ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

let Ordinal_number:number[]=[1,2,3,4,5,6,7,8,9]
for (let index = 0; index < Ordinal_number.length; index++) {
    if (Ordinal_number[index]===1) {
        console.log(`${Ordinal_number[index]}st`);
        
    } else if (Ordinal_number[index]===2) {
        console.log(`${Ordinal_number[index]}nd`);
        
    } else if (Ordinal_number[index]===3) {
        console.log(`${Ordinal_number[index]}rd`);
        
    } else {
        console.log(`${Ordinal_number[index]}th`);
        
    }
    
}