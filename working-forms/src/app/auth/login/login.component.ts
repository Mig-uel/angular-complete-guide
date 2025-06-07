import { Component, type OnDestroy, type OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
} from '@angular/forms';
import { debounceTime, of, type Subscription } from 'rxjs';

// custom validator
function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) return null;

  return {
    doesNotContainQuestionMark: true,
  };
}

// custom async validator
function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') return of(null);

  return of({
    notUnique: true,
  });
}

const savedForm = window.localStorage.getItem('saved-email');
const loadedForm: { email: string; password: string } = JSON.parse(
  savedForm || '{}'
);

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit, OnDestroy {
  formSubscription: Subscription | undefined;

  // with the reactive approach we create the form group ourselves
  form = new FormGroup({
    email: new FormControl(loadedForm.email, {
      // angular has its own validators
      validators: [Validators.email, Validators.required],
      // we can also register async validators, must return an observable
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        mustContainQuestionMark,
      ],
    }),
  });

  // getter that returns bool whether email is invalid
  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  // getter that returns bool whether password is invalid
  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  onSubmit() {
    const { email, password } = this.form.value;

    console.log(email, password);
  }

  ngOnInit(): void {
    // const savedEmail = window.localStorage.getItem('saved-email');

    // if (savedEmail) {
    //   const loadedEmail = JSON.parse(savedEmail);

    //   this.form.patchValue(loadedEmail);
    // }

    this.formSubscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) =>
          window.localStorage.setItem(
            'saved-email',
            JSON.stringify({ email: value.email })
          ),
      });
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }
}
