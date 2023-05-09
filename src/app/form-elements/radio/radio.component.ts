import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-radio',
  template: ` <form [formGroup]="form">
    <div class="radio-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
    
    <div
   class="radio-elements"
      [ngStyle]="{ display: 'flex', 'flex-direction': field.flex?.direction }"
    >
      <div
        *ngFor="let option of field.options"
        [ngStyle]="{
          'padding': '5px 5px 5px 0px',
          display: 'flex',
          'justify-content': field.flex?.justifyContent,
          'align-items': field.flex?.alignItems
        }"
      >
        <p-radioButton
          [name]="field.name"
          [value]="option"
          [formControlName]="field.name"
        ></p-radioButton>
        <label [for]="option" [ngStyle]="{ margin: '0px 0px 0px 5px' }">{{
          option
        }}</label>
      </div>
    </div>
    </div>
  </form>`,
    styles: [
      `
      ::ng-deep{
        .radio-wrapper {
          display: flex;
          flex-direction: column;
          margin: 1rem;
          .radio-elements {
            margin: 0.5rem 0 0.5rem 0;
          }
        }
      }
      `,
    ],
})
export class RadioComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
