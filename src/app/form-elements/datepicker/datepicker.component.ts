import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-datepicker',
  template: ` <form [formGroup]="form" >
    <div class="timepicker-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-calendar
        [formControlName]="field.name"
  
        [showIcon]="true"
        [showWeek]="true"
        [showTime]="false"

        [showButtonBar]="false"
        [placeholder]="'select date'"
        [showOnFocus]="false"
        [timeOnly]="false"
        [icon]="'pi pi-calendar-plus'"
        [styleClass]="'timepicker-bg-icon'"
      ></p-calendar>
      <div
        *ngFor="let error of form.get(field.name)?.errors | keyvalue"
        [ngSwitch]="error.key"
      >
        <small class="p-error" *ngSwitchCase="'required'"
          >Champ Obligatoire</small
        >
        <small class="p-error" *ngSwitchCase="'minlength'"
          >minimum {{ field.rules?.minLength }}</small
        >
      </div>
    </div>
  </form>`,
  styles: [
    `
      .timepicker-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 1rem; */
        p-calendar {
          /* margin: 0.5rem 0 0.5rem 0; */
        }
      }
      ::ng-deep {
        .timepicker-bg-icon {
          width: 100% !important;
          input {
            border-right: none !important;
            &:hover {
              border-color: #ced4da !important;
            }
            &:focus {
              border-color: #ced4da !important;
            }
          }
          button {
            background: transparent !important;
            color: #ced4da;
            border-color: #ced4da !important;
            border-left: none !important;
            &:hover {
              color: black !important;
            }
          }
        }
      }
    `,
  ],
})
export class DatepickerComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
  // minDate: any = this.field?.dateRules?.minDate || new Date('01/01/1900');
  // maxDate: any = this.field?.dateRules?.minDate  || new Date();
  ngOnChanges(changes:SimpleChanges) {
    // console.log(this.field?.dateRules?.minDate)
  }
}
