
// map of ts 

const numbers : number[] = [1,2,3,4,5]; 

const squaredNumbers = numbers.map((num) => num.toString()); // convert number to string 

console.log(squaredNumbers); 

const stringNumbers : string[] = ["1", "2", "3", "4", "5"]; 

const parsedNumbers = stringNumbers.map((str) => Number(str) )   // convert string to number ?? 
console.log(parsedNumbers);

type areyOfnumbers = {
    height: number
     wight: number 
}
 
type arrayOfStrings = {
    [key in keyof areyOfnumbers ] : string
} 

type Area <T> = { // generic mapped type
    [ key in keyof T ] : T [key]  // mapped type
} 
 const area1 : Area<{ heigt : number ; wight : string } > = {  // generic mapped type usage 
    heigt : 10,
    wight : "20"
 } 

 console.log(area1); 