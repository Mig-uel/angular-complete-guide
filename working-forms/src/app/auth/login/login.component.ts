import {
  afterNextRender,
  Component,
  signal,
  viewChild,
  type OnDestroy,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, type Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent implements OnDestroy {
  private form = viewChild.required<NgForm>('form');
  private formSubscription: Subscription | undefined;

  constructor() {
    afterNextRender(() => {
      const savedEmail = window.localStorage.getItem('saved-email');

      if (savedEmail) {
        const loadedEmail = JSON.parse(savedEmail).email;

        setTimeout(
          () => this.form().controls['email'].setValue(loadedEmail),
          1
        );
      }

      this.formSubscription = this.form()
        .valueChanges?.pipe(debounceTime(500)) // rxjs also provides a debounce pipe operator
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-email',
              JSON.stringify({ email: value.email })
            ),
        });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;

    const { email, password } = formData.form.value;

    console.log(formData.form);

    // reset form on submission and any internal information
    // like dirty, valid
    formData.reset();
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }
}
