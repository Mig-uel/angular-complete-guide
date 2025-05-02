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
  transform(value: number | string, ...args: any[]) {
    let val: number;

    if (typeof value === 'string') val = parseFloat(value);
    else val = value;

    // celsius to fahrenheit
    const celsiusTemp = val * (9 / 5) + 32;

    return `${celsiusTemp} °C`;
  }
}
