import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trying',
})
export class TryingPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
      const resultArray = []
      for(const item of value) {
        if (value.length === 0 || filterString === '' || filterString === 'ALL' ) {
          return value
        }
        if (item[propName] === filterString) {
          resultArray.push(item)
        }
      }
      return resultArray
  }

  // cut the amount of letters you wany

  // transform(value: any, start: number, end: number): any {
  //   let box:any = []
  //   let x = value.split(" ")
  //   console.log(x)
  //   for (let i = 0; i<x.length; i++) {
  //     box.push(x[i].substr(start, end))
  //   }
  //   return box.join(" ")
  // }

}
