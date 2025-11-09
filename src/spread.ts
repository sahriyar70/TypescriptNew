 const Friends = ["rahimul", "karim", "salim", "anwar", "kamal", "jamal"];
 
 const schoolFields = ["rahim", "karim", "salim"]; 

 const collegeFields = ["anwar", "kamal", "jamal"];

    const allFriends = [...Friends, ...schoolFields, ...collegeFields];

    //console.log(allFriends); 
    Friends.push(...schoolFields, ...collegeFields);
    console.log(Friends);
    

