import { Directive, ElementRef, OnInit } from '@angular/core'
@Directive ({
  selector: '[appBasicHighLight]'
})
export class basicHighLightDirective implements OnInit {
constructor (private elementRef: ElementRef) {

}
ngOnInit () {
  this.elementRef.nativeElement.style.backgroundColor = 'green'
}
}
