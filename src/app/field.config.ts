export interface Field {
  type: string;
  disabled: boolean;
  name: string;
  children?: any;
  successValue?: any;
  failValue?: any;
  label?: string;
  value?: any;
  placeholder?: string;
  options?: any[];
  width?: string;
  mobileWidth?: string;
  flex?: {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
  };
  dateRules?: {
    minDate?: string ;
    maxDate?: Date ;
  };
  rules?: {
    required?: true;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  classes?: {
    styleClass: string;
    panelStyleClass: string;
  };
}
