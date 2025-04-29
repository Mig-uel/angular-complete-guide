import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // two way binding is the combination of input and output
  // we are accepting a value but also updating a value

  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // more modern approach using model()
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      height: '100',
      width: '100',
    });
  }
}
