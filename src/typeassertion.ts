
// type assertion in ts 

let valu : any = "this is type assertion example"; 

let length = ( valu as string ).length;

console.log(`length of the string is ${length}`); 


// alternative syntax

let value2 : any = "this is alternative syntax of type assertion";  
let length2 = (<string>value2).length;  
console.log(`length of the string is ${length2}`); 


