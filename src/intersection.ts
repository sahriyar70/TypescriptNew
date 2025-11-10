type emplyee = { // type alias
    id : number;
    name : string;
    age : number;
    address : string;
}

type manager = {  // another type
    id : number;
    name : string; 
    phone : number;
    timeSize : number;  }

    type managementStaff = emplyee & manager; // intersection type
    const staff1 : managementStaff = {
        id : 474,
        name : "sahriyar", 
        age : 23,
        address : "bangladesh",
        phone : 1712345678 ,
        timeSize : 8
    };
    console.log(staff1);