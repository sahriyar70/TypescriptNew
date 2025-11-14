
// polimorphism 

class person {
    getsleep(){
        console.log(" he is sleep 10h");
        
    }
}

class student extends person {
    getsleep() {
        console.log("he sleep 8h");
        
    }
}

class nexleveldev extends person{
    getsleep() {
        console.log("he sleep 2h");
        
    }
}

    const getsleepinghour = ( peram: person)=>{
        peram.getsleep()
    }

const person1 = new person()
const student1 = new student()
const nextlevel = new nexleveldev()

getsleepinghour(person1)
getsleepinghour(student1)
getsleepinghour (nextlevel)
 