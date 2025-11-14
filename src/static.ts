
//  static of ts 

 class Counter {
    static count = 0;

   static  increment(){
        return( Counter.count = Counter.count + 1)
    }

   static decriment (){
        return ( Counter.count = Counter.count - 1)
    }
 }

//  const instanc1 = new Counter()
//  console.log(instanc1.increment());
//  console.log(instanc1.increment());

//  const instanc2 = new Counter()
//  console.log(instanc2.increment());
//  console.log(instanc2.increment());
//  console.log(instanc2.increment());

//  const instanc3 = new Counter()
//  console.log(instanc3.decriment());
 
 
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

// 

console.log(Counter.decriment());
console.log(Counter.decriment());
console.log(Counter.decriment());
console.log(Counter.decriment());




 
 