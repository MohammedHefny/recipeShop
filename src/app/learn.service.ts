import { Injectable } from '@angular/core';
import { trainingModel } from './training.module';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor() { }
   products: trainingModel[] = [
    new trainingModel('banana',10,'Egypt'),
    new trainingModel('Apple',20,'Syria'),
    new trainingModel('Orange',30,'Iraq'),
  ]
   Theproducts: any = [
    {name: 'mohamed',age: 10,title: 'engineer'},
    {name: 'ali',age: 11,title: 'doctor'},
    {name: 'asmaa',age: 12,title: 'vet'},
   ]

}
