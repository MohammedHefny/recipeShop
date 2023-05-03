import { Directive,
   Renderer2,
    ElementRef,
     OnInit,
      HostListener,
      HostBinding,
      Input
    } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() HighlightColor: string = 'blue'
  @HostBinding('style.backgroundColor')
  backgroundColor!: string;
  constructor(private elref: ElementRef, private renderer: Renderer2) { }
ngOnInit() {
  // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue')
this.backgroundColor = this.defaultColor;
}
@HostListener('mouseenter') mouseover(eventData:Event) {
  // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue')
  this.backgroundColor = this.HighlightColor

}
@HostListener('mouseleave') mouseleave(eventData:Event) {
  // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'transparent')
  this.backgroundColor = this.defaultColor

}
}
