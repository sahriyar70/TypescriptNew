const  user :{
    organizatoon : "ASR"; //literal type value is fixed 
    FristName : string;
    middleName? : string; // optional property 
    lastName : string;
    id : number ;

}= {
    organizatoon : "ASR",
    FristName : "Sahriyar",
    lastName : "Ahmad"
    ,id : 474
}
console.log(user
);


let users :{
    readonly organizatoon : string; //accass modifier
    FristName : string;
    middleName? : string; // optional property 
    lastName : string;
    id : number ;

}= {
    organizatoon : "ASR",
    FristName : "Sahriyar",
    lastName : "Ahmad"
    ,id : 474
}
console.log(users);

console.log(user
);
