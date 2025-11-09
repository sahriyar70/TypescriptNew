 const Friend = (...Friends: string[]) => {
    Friends.forEach(friend => {
        console.log(`My Friend Name is ${friend}`);
    });
}

Friend("sahriyar", "ahmad", "ali", "khan", "umer", "salman", "farhan");