import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPipe',
  pure: false
})
export class DefaultImagePipe implements PipeTransform {
// this is not a default pipe but it counts the total sum o datas
  transform(list: any[],property: string): any {
    return list.reduce((a,b)=> a + b[property], 0)
  }

}
