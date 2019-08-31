import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import {MustMatchValidator} from './mustMatch.validator';



@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    return MustMatchValidator(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}
