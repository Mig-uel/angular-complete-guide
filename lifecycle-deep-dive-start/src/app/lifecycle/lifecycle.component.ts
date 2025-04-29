import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // invoked by angular whenever it thinks a UI update might be needed anywhere
  ngDoCheck() {
    // discouraged to use this hook as it is system-wide
    console.log('ngDoCheck');
  }

  // invoked when 'ng-content' content has been initialized
  ngAfterContentInit() {
    // we could access that content and get information about it
    console.log('ngAfterContentInit');
  }

  // invoked when the content has been detected by angular change
  // detection mechanism
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // invoked when the template is init/rendered
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // invoked when angular performs change detection for this component
  // view/template
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // invoked when this component is about to be thrown away aka destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

/**
 * Technically, the 'View' is an internally managed data structure
 * that hold references to the DOM elements rendered by a
 * component
 */

/**
 * Content might be any content that might be 'projected' in a view
 * (done with ng-content)
 * So the 'Content' is some other (partial) View data structure
 * projected into this component's view
 */
