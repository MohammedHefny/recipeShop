import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, interval, Subscription, Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit, OnDestroy{
  private firstObsSubscription: Subscription = new Subscription;
constructor() {}
ngOnInit(){
// this.firstObsSubscription = interval(1000).subscribe(count => {
//   console.log(count)
// })
const CustomIntervalObservable = Observable.create((observer: {
  complete: any;
  error(arg0: Error): unknown; next: (arg0: number) => void;
}) => {
  let count = 0
  setInterval(() => {
    observer.next(count)
    if (count === 5) {
      observer.complete()
    }
    if(count > 3 ) {
      observer.error(new Error('count is greater than 3!'))
    }
    count++
  }, 1000);
});
this.firstObsSubscription = CustomIntervalObservable.pipe(filter((data:number)=>{
  return data > 0
}),map((data: number)=> {
  return 'round: ' + (data + 1) ;
})).subscribe((data: number) => {
  console.log(data)
}, (error: any) => {
  console.log(error)
  alert(error.message)
},() => {
  console.log('completed')
} )
}
ngOnDestroy(){
  this.firstObsSubscription.unsubscribe()
}
}
