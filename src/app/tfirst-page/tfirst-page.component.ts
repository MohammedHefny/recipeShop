import { Component } from '@angular/core';
import { modelFirstPage } from './Model';

@Component({
  selector: 'app-tfirst-page',
  templateUrl: './tfirst-page.component.html',
  styleUrls: ['./tfirst-page.component.scss']
})
export class TFirstPageComponent {
recipes:modelFirstPage[] = [
  new modelFirstPage('A Test Recipe', 'This is simply a test', 'imgs/pexels-lisa-fotios-1161547.jpg'),
  new modelFirstPage('Another Test Recipe', 'This is simply a test', 'imgs/pexels-lisa-fotios-1161547.jpg'),
]
}
