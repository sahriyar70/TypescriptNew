
class BankAcunt {

   private userId : number ;  // privete 
    userName : string ;
    protected userBalenc : number ;

    constructor ( userId : number , userName : string , userBalenc : number){
        this.userId = userId ;
        this.userName = userName;
        this.userBalenc = userBalenc
    }

    add (balenc: number ){
        this.userBalenc = this.userBalenc + balenc

    }
}

 class cild extends BankAcunt {
    test(){
        this.userBalenc   // protected 
        this.userName    // public
    }
 }
 const Myacuont = new BankAcunt (22,"jgj",9)
  Myacuont.add(1)
  console.log(Myacuont)