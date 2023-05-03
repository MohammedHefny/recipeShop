import { Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDirectiveTraining]'
})
export class DirectiveTrainingDirective implements OnInit{
ngOnInit() {}

@Input () set appDirectiveTraining (cond:boolean) {
if(cond === true) {
  this.vcRef.createEmbeddedView(this.templateRef);
}else {
  this.vcRef.clear();

}

}

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }


// to change color

//   @Input() defaultColor:string = 'blue'
//   @Input() hoverColor:string = 'tomato'
//   @HostBinding('style.backgroundColor')
//   backgroundColor!: string;
//   constructor(private colorChanger: ElementRef, private renderer: Renderer2) { }
//   ngOnInit(){
//     this.backgroundColor = this.defaultColor
//   }
// @HostListener('mouseenter') theMouseHasEntered(eventData:Event) {
//   // this.renderer.setStyle(this.colorChanger.nativeElement,'backgroundColor','blue')
//   this.backgroundColor = this.defaultColor
// }
// @HostListener('mouseleave') theMouseHasLeft(eventData:Event) {
//   this.backgroundColor = this.hoverColor
//   // this.renderer.setStyle(this.colorChanger.nativeElement,'backgroundColor','tomato')
// }

}
