 
 // ternary operator 

 const biyerBoyos = (age: number) => { 
    if (age <=21){
        console.log("biyer boyos hoynai");
        
    } else {
        console.log("biyer boyos hoyeche");
    } }

    biyerBoyos(25);

    const biyerBoyos2 = (age: number) => { age >= 21 ? console.log("biyer boyos hoyeche") : console.log("biyer boyos hoynai") };

    biyerBoyos2(18); 

    // nullish coalescing operator  // null 0 undefined  
 
    const userthem = null; 

    const seleectTheme = userthem ?? "Dark Mode";

    console.log(seleectTheme);

    // optional chaining 

    type customUser = {
        id : number;
        name : string; 
        address ?: {
            street : string;
            city : string;
            postcode?: number;
        },
        
    } 

    const newUser : customUser = {
        id : 474,
        name : "sahriyar"
    }; 

    const userCity = newUser?.address?.postcode ?? "No postcode available";
    console.log(userCity);


