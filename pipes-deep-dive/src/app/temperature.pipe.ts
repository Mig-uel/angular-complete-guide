import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  /**
   * auto executed by Angular
   * the value after you use the pipe will be passed as an argument
   * to the transform method
   */
  transform(value: any, ...args: any[]) {
    return value + ' - transformed';
  }
}
