import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samevalue'
})
export class SamevaluePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  }

}
