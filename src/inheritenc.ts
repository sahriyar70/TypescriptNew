
class student {
    name : string;
    age : number;
    roll : number ;
    constructor(name : string, age : number, roll : number){
        this.name = name;
        this.age = age;
        this.roll = roll;
    }   
    getstudentInfo() {
        console.log(`student name is ${this.name}, age is ${this.age}, roll number is ${this.roll}`);
    } }

     const student1 = new student("sahriyar", 23, 474);
        const student2 = new student("ahmad", 25, 475);
        student1.getstudentInfo();
        student2.getstudentInfo(); 


        class parent {     // inheritance
            name : string;
             constructor ( name : string){
                this.name = name;
             } 

             greet(){
                console.log(`hello from parent class, name is ${this.name}`);
             }   }

             class child extends parent { // inherit parent class
                age : number 
                constructor (name : string, age : number){
                    super(name);
                    this.age = age;
                } 
                info (){
                    console.log(`hello from child class, name is ${this.name}, age is ${this.age}`);
                }
                
             }

                const parent1 = new parent ("sahriyar");
                parent1.greet();

                const child1 = new child ("ahmad", 25);
                child1.greet();
                child1.info();