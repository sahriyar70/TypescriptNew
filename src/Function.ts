 // Nomal function
 // Arrow function

 function addNormal(num1: number, num2: number) :number {
     return num1 + num2;
 }
    console.log(addNormal(4, 5));

    const addArrow = (num1 : number , num2 : number) :number => num1 + num2;
    console.log(addArrow(6, 7));

    // function with optional parameter

    // function - object - me1thod

    const poorUser = {
        name : "sahriyar",
        balence : 474,
        addBalence(value : number ) :number {
            const totalbalence = this.balence + value ;
            return totalbalence;

    }  } // object method , method inside object

     poorUser. addBalence(526);
        console.log(poorUser. addBalence(526));

        // arro fuqnction 

        const arr : number[] = [4, 5, 6, 7, 8];

        const squArry = arr.map((element : number) : number => element * element );
        console.log(squArry); 

     