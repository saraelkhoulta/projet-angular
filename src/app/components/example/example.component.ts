import { Component, OnInit, ContentChild, ElementRef, ContentChildren, Input, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy ,AfterViewInit, ViewChild, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges{
//@ContentChild('title1')title:ElementRef;

/*OnClick(){

  console.log(this.title.nativeElement.value);
  
    }




    isReady=true;
    @Input()title;
    @ViewChild('myview')myview;
    @ContentChild('mycontent')mycontent:ElementRef;
ngOnChanges(){
      console.log('1-  onchange  '+this.mycontent);
  }

ngOnInit(){
  console.log('2-  onInit  '+this.mycontent);
}


ngDoCheck(){
  console.log('3-  DoCheck  '+this.mycontent);
}

ngAfterContentChecked(){
  console.log('5-  AfterContentChecked  '+this.mycontent);
}
ngAfterContentInit(){
  console.log('4-  AfterContentInit  '+this.mycontent);
}
ngAfterViewChecked(){
  console.log('7-  AfterViewChecked  '+this.mycontent);
}
ngAfterViewInit(){
  console.log('6-  AfterViewInit  '+this.mycontent);
}

ngOnDestroy(){
  console.log('8-  OnDestroy  '+this.myview);
}
*/



@Input()title;
ngOnChanges(simplrChange:SimpleChanges){
  console.log(this.title);
}









}
 

