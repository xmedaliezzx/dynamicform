import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Field } from './field.config';
import { DynamicForm } from './dynamicform.config';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  form: FormBuilder = new FormBuilder();
  constructor() {}
  buildForm(fields: Field[]) {
    const formGroupFields: any = {};
    for (const field of fields) {
      const validators: any = this.addValidator(field.rules);
      formGroupFields[field.name] = new FormControl(
        { value: field.value, disabled: field.disabled },
        validators
      );
      if (field?.children?.childrens.length > 0) {
        for (const nestedfield of field?.children?.childrens) {
          const validators: any = this.addValidator(field.rules);
          formGroupFields[nestedfield.name] = new FormControl(
            { value: nestedfield.value, disabled: nestedfield.disabled },
            validators
          );
        }
      }
    }
    return this.form.group(formGroupFields);
  }

  addValidator(rules: any) {
    if (!rules) {
      return [];
    }
    const validators = Object.keys(rules).map((rule: string) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        case 'minLength':
          return Validators.minLength(rules[rule]);
        case 'maxLength':
          return Validators.maxLength(rules[rule]);
        case 'pattern':
          return Validators.pattern(rules[rule]);
        default:
          return [];
      }
    });
    return validators;
  }

  removehiddenFields(DynamicForm: DynamicForm, form: FormGroup) {
    Object.keys(form.getRawValue()).map((key: any) => {
      if (
        DynamicForm.fields[
          DynamicForm.fields.findIndex((field) => field.name == key)
        ]?.children?.childrens.length > 0
      ) {
        if (form.get(key)?.value != DynamicForm.fields[DynamicForm.fields.findIndex((field) => field.name == key)].children.activationValue  ) {
          DynamicForm.fields[
            DynamicForm.fields.findIndex((field) => field.name == key)
          ].children?.childrens.map((child: any) => {
            form.controls[child.name].patchValue('');
          });
        }
      }
    });
    return form.getRawValue();
  }

  createFormData(form: any,formData:FormData) {
    Object.keys(form).map((key: any) => {
      formData.append(key, form[key]);
    });
  }
}
