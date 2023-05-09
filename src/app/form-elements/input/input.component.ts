import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-input',
  template: ` <form [formGroup]="form">
    <div class="input-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <input
        pInputText
        [id]="field.disabled ? 'disabled-input' : field.name"
        [type]="field.type"
        #field.name
        [disabled]="field.disabled"
        [class]="field.name"
        [placeholder]="field.placeholder"
        [name]="field.name"
        [formControlName]="field.name"
      />
      <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
        <small class="p-error" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        <small class="p-error" *ngSwitchCase="'minlength'" >minimum {{field.rules?.minLength}}</small>
      </div>
    </div>
  </form>`,
  styles: [
    `
      .input-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 1rem; */
        input {
          /* margin: 0.5rem 0 0.5rem 0; */
        }
      }
    `,
  ],
})
export class InputComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
