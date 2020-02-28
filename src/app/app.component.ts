import { Component, OnInit, EventEmitter, OnDestroy, OnChanges, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import{of,from, range, Subscription, Observer, Observable} from 'rxjs';
import {map,filter}from 'rxjs/operators'
import { error } from '@angular/compiler/src/util';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

/*title="Morrocco";

user={
.map(i => i * 2)
.filter(i => i >5)
.subscribe(i=> console.log(i));
imgSrc='https://placeimg.com/640/480/any';

OnClick(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
  
}

OnInput(event){
console.log(event.target.value);
}

.map(i => i * 2)
.filter(i => i >5)
.subscribe(i=> console.log(i));js';
import { filter, map } from 'rxjs/operators';

constructor(title: Title,meta: Meta) {
  title.setTitle('PonyRacer - Bet on ponies');//Il y a un service Title que tu peux t’injecter, et il propose un getter et un setter 
  meta.addTag({ name: 'author', content: 'Ninja Squad' });//ce service permet de récupérer et mettre à jour les valeurs "meta" de la page.
  }
[1, 2, 3, 4, 5]
nbr=8;


userMap=new Map<number,Object>();
constructor(){
  this.userMap.set(
.map(i => i * 2)
.filter(i => i >5)
.subscribe(i=> console.log(i));1,{name:'sara'});
  this.userMap.set(2,{name:'elkhoulta'});
}
today: number = Date.now();

asyncExemple=new Promise(resolve=>{ w*/
/* .map(i => i * 2)  
.filter(i => i >5)
.subscribe(i=> console.log(i));
 */

//rxjs

  /*
subscription:Subscription;
ngOnInit() {

 range(1, 5)  //on peut faire aussi from([1,5])
  .pipe(map(x => x*2)
       ,filter(x => x > 5)
  )
  .subscribe(
  x => console.log(x),
  error=> console.log('erreur'),
  ()=>console.log("fini!")
  );

  //rxjs dans Angular
  const emmiter=new EventEmitter();
  this.subscription=emmiter.subscribe(
    value=>console.log(value),
    error=>console.log(error),
    ()=>console.log('fin'),
  )
  emmiter.emit('hello'); 
}

ngOnDestroy(){
  console.log('unsubscription');
  this.subscription.unsubscribe();//// unsubscribe
 
}*/


//@ViewChild
/*
@ViewChild('songTitle') title:ElementRef;
debbuger;
@ViewChild(YoutubePlayerComponent)youtube:YoutubePlayerComponent;
Onclick(){
  console.log(this.title.nativeElement.value);
}

//@viewChildren
@ViewChildren(YoutubePlayerComponent)youtube:QueryList<YoutubePlayerComponent>;
Onclick(){
  console.log(this.youtube.map(resu=>resu.songPlayer));
}
isVisible=true;

ngOnInit(){
  setTimeout(()=>{this.isVisible=false;},5000)
}*/
 feature='teams';
title={
  label:"angular"
}


onseletedFeature(feature){
  this.feature=feature;
}

























}

