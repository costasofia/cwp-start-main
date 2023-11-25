import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { EmailRegex, PhoneNumberRegex } from '../constants/app.constants';

export const emailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const validEmail = EmailRegex.test(value);

    return !validEmail ? { email: true } : null;
  };
};

export const phoneNumberValidation = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const validPhone = PhoneNumberRegex.test(value);

    return !validPhone ? { phoneNumber: true } : null;
  };
};
