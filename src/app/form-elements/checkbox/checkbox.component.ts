import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-checkbox',
  template: `<form [formGroup]="form">
    <br>
    <p-checkbox
      [name]="field.value"
      [value]="field.name"
      (onChange)="onChange($event)"
    ></p-checkbox>
    <label [for]="field.name" style="padding-left: 0.5rem;">{{ field.name }}</label>
  </form> `,
})
export class CheckboxComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
  onChange(event: any) {
    event.checked.length
      ? this.form.controls[this.field.name].setValue(this.field.successValue)
      : this.form.controls[this.field.name].setValue(this.field.failValue);
  }
}
