import { Component, OnInit } from '@angular/core';
import { LearnService } from '../learn.service';
import { trainingModel } from '../training.module';

@Component({
  selector: 'app-learn-comp',
  templateUrl: './learn-comp.component.html',
  styleUrls: ['./learn-comp.component.scss']
})
export class LearnCompComponent implements OnInit{
  ngOnInit() {
    this.getProductData()
  }
  products: any = []
constructor(private learningService: LearnService) {}
getProductData() {
  this.products = this.learningService.Theproducts
}

dataFromParent: any = ''
x(data: any) {
  this.dataFromParent = data
}

dataReceivedFromParent(data: string) {
console.log(data)
}
}
