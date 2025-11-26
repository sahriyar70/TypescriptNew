 // কম বুজ্জতে পারছি 


 class Parson  { 
    name : string;
    constructor (name : string) {
        this.name = name;
    }  }

    class Student extends Parson {
        constructor (name : string){
            super(name);
        } stydy(){
            console.log(`${this.name} is studying`);
        }   } 


        class Teacher extends Parson {
            constructor (name : string){
                super(name);
            } teach(){
                console.log(`${this.name} is teaching`);
            }   } 

            const getUserInfo = (user : Parson) => {
                if(user instanceof Student){         // type guard 
                    user.stydy();
                } else if (user instanceof Teacher){
                    user.teach();
                } else {
                    console.log("unknown user");
                }  
                 }

                 const student1 = new Student ("sahriyar");
                 const teacher1 = new Teacher ("ahmad"); 

                 getUserInfo (student1);
                 getUserInfo (teacher1); 