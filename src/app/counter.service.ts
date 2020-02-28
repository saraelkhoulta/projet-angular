export class CounterService{
num:number=0;
constructor(){}

Increment():void{
    console.log(this.num++);
}
}