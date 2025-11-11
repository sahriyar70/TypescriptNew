
// generic with function in ts 

 const getArray = <T>(items : T) : T => {
    return items;

 }

 const result1 = getArray<string>("sahriyar");
 const result2 = getArray<number>(474);
    console.log(result1);
    console.log(result2); 