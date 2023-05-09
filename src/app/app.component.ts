import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Field } from './field.config';
import { FormComponent } from './form/form.component';
import { DynamicForm } from './dynamicform.config';
import { FieldType } from './FieldType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FormComponent) formComponent: FormComponent;
  form: DynamicForm = {
    fields: [
      {
        type: FieldType.input,
        disabled: true,
        name: 'name',
        label: 'Name',
        value: 'Rochdi',
        placeholder: 'Enter Name',
        width: '25%',
        rules: {
          required: true,
        },
      },
      {
        type: FieldType.input,
        disabled: false,
        name: 'lastName',
        label: 'Last Name',
        value: '',
        placeholder: 'Enter Last Name',
        width: '25%',
        
        rules: {
          required: true,
          minLength: 3,
        },
      },
      {
        type: FieldType.input,
        disabled: false,
        name: 'age',
        label: 'Age',
        value: '',
        placeholder: 'Enter Age',
        width: '50%',
        rules: {
          required: true,
          minLength: 4,
        },
      },
      {
        type: FieldType.singleselection,
        disabled: false,
        name: 'address',
        label: 'Address',
        width: '50%',
        value: '',
        options: ['Tunis', 'Sousse', 'Sfax'],
        children: {
          activationValue: 'Sousse',
          childrens: [
            {
              type: FieldType.input,
              disabled: false,
              name: 'names',
              label: 'Name',
              value: 'Ezz',
              placeholder: 'Enter Name',
              rules: {
                required: true,
              },
            },
          ],
        },
      },
      {
        type: FieldType.timepicker,
        disabled: false,
        name: 'time',
        label: 'Time',
        value: '',
        width: '30%',
        options: [],
      },
      {
        type: FieldType.upload,
        disabled: false,
        name: 'file',
        label: 'upload your file',
        width: '20%',
        value: '',
        options: [],
      },
      {
        type: FieldType.radiobuttons,
        disabled: false,
        name: 'radio',
        label: 'Radio',
        value: '',
        options: ['Tunis', 'Sousse', 'Sfax'],
        flex: {
          direction: 'row',
        },
      },
      {
        type: FieldType.checkbox,
        disabled: false,
        name: 'checkbox',
        label: 'Checkbox',
        value: '',
        successValue: 'has accepted',
        failValue: 'not accepted',
      },
      {
        type: FieldType.datepicker,
        disabled: false,
        name: 'time',
        label: 'Time',
        value: '',
        options: [],
        dateRules: {
          minDate: '01/01/2020',
          maxDate: new Date(),
        }
      },
    ],
    hasFiles: true,
  };
  constructor() {}

  submit() {
    this.formComponent.submitForm();
  }

  // getFormControlsFields() {
  //   const formGroupFields: any = {};
  //   for (const field of Object.keys(this.model)) {
  //     formGroupFields[field] = new FormControl('');
  //     this.fields.push(field);
  //   }
  //   return formGroupFields;
  // }

  // buildForm() {
  //   const formGroupFields = this.getFormControlsFields();
  //   this.registerForm = new FormGroup(formGroupFields);
  // }
}
