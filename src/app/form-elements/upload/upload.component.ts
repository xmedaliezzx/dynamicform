import { Component, Input, ViewChild } from '@angular/core';
import { Field } from 'src/app/field.config';

@Component({
  selector: 'app-upload',
  template: `
    <form class="upload-wrapper" >
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <div class="upload-file-custom">
        <input [disabled]="true" [value]="inputVal" />
        <p-fileUpload
          #cutomUpload
          mode="basic"
          [styleClass]="'customUpload'"
          name="demo[]"
          [uploadIcon]="'pi pi-delete-left'"
          [uploadLabel]="''"
          [customUpload]="true"
          [chooseIcon]="'pi pi-file'"
          [maxFileSize]="10000000000"
          (onSelect)="onSelect($event)"
          (uploadHandler)="onRemove()"
        ></p-fileUpload>
      </div>

      <!-- <div
        *ngFor="let error of form.get(field.name)?.errors | keyvalue"
        [ngSwitch]="error.key"
      >
        <small class="p-error" *ngSwitchCase="'required'"
          >Champ Obligatoire</small
        >
        <small class="p-error" *ngSwitchCase="'minlength'"
          >minimum {{ field.rules?.minLength }}</small
        >
      </div> -->
    </form>
  `,
  styles: [
    `
      .upload-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 2rem; */
       .upload-file-custom {
          /* margin: 0.5rem 0 0.5rem 0; */
        }
      }
      ::ng-deep {
        .customUpload {
        
          background: transparent !important;
          border-color: transparent !important;
          color: #0e0101 !important;
          width: auto !important;
          /* padding: 0 !important; */
          span {
            background: transparent !important;
          }
        }
      }

      .upload-file-custom {
        width: 100% !important;
        display: flex;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        /* padding: 0.375rem 0.75rem; */
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        input {
          width: 100% !important;
          border: none !important;
        
        }
      }
    `,
  ],
})
export class UploadComponent {
  @ViewChild('cutomUpload') fileUpload: any;
  @Input() field!: Field;
  @Input() formdata: FormData;
  inputVal: any = 'Choose File...';
  showUploadButton: boolean = false;
  showCancelButton: boolean = false;
  onSelect(event: any) {
    this.formdata.append(this.field.name, event.currentFiles[0]);
    this.inputVal = event.currentFiles[0].name;
  }
  onRemove() {
    this.fileUpload.clear();
    this.inputVal = 'Choose File...';
  }
}
