class Car {
    brand;
    model;
    speed=0;
    isTrunkOpen=false;
 
    constructor(carDetails){
     this.brand=carDetails.brand;
     this.model=carDetails.model;
    }

    go(){
      if ((this.speed >= 0) && (this.speed<=200) && (!this.isTrunkOpen))
     this.speed+=5
    }

    break(){
      if ((this.speed >= 0) && (this.speed<=200) && (!this.isTrunkOpen))
      this.speed-=5
    }
    
      DisplayInfo (){
        const trunkStatus=   this.isTrunkOpen? 'open ':'closed';
      console.log(`${this.brand} ${this.model} speed: ${this.speed} km/h trunkisOpen:${trunkStatus}`)
       
    }

   
  openTrunk(){
    if (this.speed==0)
    this.isTrunkOpen=true
  }

  closeTrunk(){
    this.isTrunkOpen=false

}
}

class Racecar extends Car {
  accleration;

  constructor(carDetails){
    super(carDetails);
    this.accleration=carDetails.accleration;
  }

  go(){
      if ((this.speed >= 0) && (this.speed<=300))
    this.speed+=this.accleration
  }

    
  openTrunk(){
   console.log('racecar does not have trunk')
  }

  closeTrunk(){
     console.log('racecar does not have trunk')

}
 
  
}

const car1=new Car({
  brand:'toyota',
  model:'corolla',
  
})
const car2=new Car({
  brand:'tesla',
  model:'model 3 '
})
const racecar= new Racecar({
  brand:'mcLaren',
  model:'F1',
  accleration:20
})

car1.go()
car1.go()
car1.go()
car1.break()
car1.openTrunk()

car2.openTrunk()

car1.DisplayInfo();
car2.DisplayInfo();

racecar.go()
racecar.DisplayInfo()


    