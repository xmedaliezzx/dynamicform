import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './form-elements/input/input.component';
import { SelectComponent } from './form-elements/select/select.component';
import { DatepickerComponent } from './form-elements/datepicker/datepicker.component';
import { TimepickerComponent } from './form-elements/timepicker/timepicker.component';
import { FormComponent } from './form/form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadComponent } from './form-elements/upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioComponent } from './form-elements/radio/radio.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxComponent } from './form-elements/checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    DatepickerComponent,
    TimepickerComponent,
    FormComponent,
    UploadComponent,
    RadioComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FileUploadModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    InputTextModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
