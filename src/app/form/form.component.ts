import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { Field } from '../field.config';
import { FormService } from '../form.service';
import { FormGroup } from '@angular/forms';
import { DynamicForm } from '../dynamicform.config';
import { FieldType } from '../FieldType';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  innerWidth: any = window.innerWidth;
  FieldTypes = FieldType;
  form!: FormGroup;
  formdata = new FormData();
  @Input() dynamicform: DynamicForm;
  @Output() submitEvent = new EventEmitter();
  _formBuilder = inject(FormService);

  ngOnChanges(changes: SimpleChanges) {
    this.form = this._formBuilder.buildForm(this.dynamicform.fields);
//     this.form.valueChanges.subscribe((data) => {
// console.log(data);

//     });
  }

  submitForm() {
    const form = this._formBuilder.removehiddenFields(
      this.dynamicform,
      this.form
    );

    this._formBuilder.createFormData(form, this.formdata);
    console.log(this.formdata);
    console.log(this.form.getRawValue());
    
    
  }
}
