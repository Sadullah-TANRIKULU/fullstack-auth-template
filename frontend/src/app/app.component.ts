import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <div class="auth-form">
      <mat-form-field  [hideRequiredMarker]="hideRequiredControl.value"
          [floatLabel]="getFloatLabelValue()" >
        <mat-label>Firstname</mat-label>
        <input matInput placeholder="Firstname" >
      </mat-form-field>
      <mat-form-field>
        <mat-label>Lastname</mat-label>
        <input matInput placeholder="Lastname" >
        </mat-form-field>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput placeholder="pat@example.com" [formControl]="email" required>
          <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
          </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'">
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
        </mat-form-field>
      <mat-form-field>
        <mat-label>Role</mat-label>
        <input matInput placeholder="Role" >
      </mat-form-field>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor(private _formBuilder: FormBuilder) {}

  title = 'fs-authtemplate-frontend';

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
  hideRequired: this.hideRequiredControl,
  floatLabel: this.floatLabelControl,})

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
