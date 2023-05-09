import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-select',
  template: `<form [formGroup]="form">
    <div class="select-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-dropdown
        [formControlName]="field.name"
        [options]="field.options || []"
        [showClear]="true"
        [placeholder]="field.placeholder || 'Select an option'"
      ></p-dropdown>
      <small class="p-error">Enter your username to reset your password.</small>
    </div>
  </form> `,
  styles: [
    `
      .select-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 1rem; */
        ::ng-deep {
          .p-dropdown {
            /* margin: 0.5rem 0 0.5rem 0; */
            width: 100% !important;
          }
        }
      }
    `,
  ],
})
export class SelectComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
