  // conditional.ts
 
 type A = null 
type B = undefined 

type C = A extends null ? true : B extends undefined ? true : false; 

type ricePeolevechill = {
    bicker : string;
    car : string;
    bus : string;
}

type chakvechill<T> = T extends keyof ricePeolevechill ? true : false;

 type check1 = chakvechill<"bicker"> 
    type check2 = chakvechill<"train">  
    
