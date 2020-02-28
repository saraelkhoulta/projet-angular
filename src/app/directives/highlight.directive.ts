import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener, Input, OnChanges } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit ,OnChanges{


  //ElementRef p:71
        /*  constructor(private elementRef:ElementRef) { }

          ngOnInit(){
              this.elementRef.nativeElement.style.backgroundColor='Red';
          }*/

/* //Renderer2
         constructor(private elementRef:ElementRef,private renderer:Renderer2) { }   

         ngOnInit(){
            this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');
         }*/ 

//@hostBinding
/*    @HostBinding('style.backgroundColor') bg; //on peut aussu faire @HostBinding('style.backgroundColor') bg='yellow';

      ngOnInit(){
        this.bg='yellow';


 //@hostListner
 @HostBinding('style.backgroundColor')bg; //concerne les proprirtés
 @HostListener('mouseenter')  //ecouter un evenement
      mouseenter(eventData:Event){
        this.bg='pink';
      }
 @HostListener('mouseleave')
      mouseleave(eventData:Event){
        this.bg='green';
      }
 */

      ngOnInit(){
        console.log('onilit')
      }
      ngOnChanges(){
          console.log('onchange');
      }

  //@input

  @HostBinding('style.backgroundColor')backg; //concerne les proprirtés
  @Input() Default;
  @Input() appHighlight;
 @HostListener('mouseenter')  //ecouter un evenement
 mouseenter(eventData:Event){ //on peut enlever (eventData:Event)
        this.backg=this.Default;
      }
      
 @HostListener('mouseleave',['$event'])
      mouseleave(eventData:Event){
        console.log(eventData);
        this.backg=this.appHighlight;
      }

      



}
