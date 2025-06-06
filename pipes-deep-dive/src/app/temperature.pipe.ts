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
  transform(
    value: number | string | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    // make the pipe configurable by accepting args

    if (!value) return value;

    let val: number;

    if (typeof value === 'string') val = parseFloat(value);
    else val = value;

    let outputTemp: number;

    // calc temperature conversion
    if (inputType === 'cel' && outputType === 'fah')
      outputTemp = val * (9 / 5) + 32;
    else if (inputType === 'fah' && outputType === 'cel')
      outputTemp = (val - 32) * (5 / 9);
    else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
