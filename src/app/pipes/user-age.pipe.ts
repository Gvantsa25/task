import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAge'
})
export class UserAgePipe implements PipeTransform {

  transform(value: string): any {
    let today = new Date;
    let arr = value.split('/');
    let year = today.getFullYear() - Number(arr[2]);
    if (+arr[0] > today.getMonth()) {
      year--;
    }
    if (+arr[1] > today.getDate() && +arr[0] === today.getMonth()) {
      year--;
    }
    return year;
  }

}
