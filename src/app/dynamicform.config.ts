import { Field } from './field.config';

export interface DynamicForm {
  fields: Field[];
  hasFiles: boolean;
}
