import { Component } from '@angular/core';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top.util';
import { CWPFlowStepsSequence } from '../../enums/cwp-flow-steps-sequence.enum';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
  FormGroupName,
} from '@angular/forms';

import {
  emailValidator,
  phoneNumberValidation,
} from 'src/app/shared/utils/validation';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { firstName } from 'src/app/shared/constants/app.constants';
import { birthDateRegex, cityRegex, emailRegex, employedDateSinceRegex, employmentContractValidTillRegex, ibanRegex, maxLengthBirthName, maxLengthCity, maxLengthCountryOfActivity, maxLengthDoorNumber, maxLengthFirtName, maxLengthIndustry, maxLengthLastName, maxLengthProfession, maxLengthStreet, maxLengthZipCode, minLengthBirthName, minLengthCity, minLengthCountryOfActivity, minLengthDoorNumber, minLengthFisrtName, minLengthIndustry, minLengthLastName, minLengthProfession, minLengthStreet, minLengthZipCode, netIncomeRegex, phoneNumberRegex, rentRegex, residencePermitValidTillRegex, residentDateSinceRegex } from 'src/app/shared/constants/dynamicValidations';

@Component({
  selector: 'app-cwp-flow',
  templateUrl: './cwp-flow.component.html',
  styleUrls: ['./cwp-flow.component.scss'],
})
export class CwpFlowComponent {
  salutation: string[] = ['Frau', 'Herr', 'Divers/Offen'];
  condition = true;
  isSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    public CwpFlowService: CwpFlowControlService
  ) {}

  CWPForm: FormGroup = this.fb.group({
    personalData: this.fb.group({
      salutation: this.fb.control(null, [Validators.required]),
      firstName: this.fb.control('', [Validators.required, Validators.maxLength(maxLengthFirtName), Validators.minLength(minLengthFisrtName)]),
      lastName: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthLastName), Validators.minLength(minLengthLastName)]),
      email: this.fb.control(null, [Validators.required, Validators.pattern(emailRegex)]),
      birthDate: this.fb.control(null, [Validators.required, Validators.pattern(birthDateRegex), Validators.min(minLengthBirthName), Validators.max(maxLengthBirthName)]),
      birthName: this.fb.control(null),
      maritalStatus: this.fb.control(null, [Validators.required]),
    }),
    contactDetails: this.fb.group({
      zipCode: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthZipCode), Validators.min(minLengthZipCode)]),
      city: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthCity), Validators.minLength(minLengthCity), Validators.pattern(cityRegex)]),
      street: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthStreet), Validators.minLength(minLengthStreet)]),
      doorNumber: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthDoorNumber), Validators.minLength(minLengthDoorNumber)]),
      residentDateSince: this.fb.control(null, [Validators.required,  Validators.pattern(residentDateSinceRegex)]),
      previousZipCode: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthZipCode), Validators.min(minLengthZipCode)]),
      previousCity: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthCity), Validators.minLength(minLengthCity), Validators.pattern(cityRegex)]),
      previousStreet: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthStreet), Validators.minLength(minLengthStreet)]),
      previousDoorNumber: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthDoorNumber), Validators.minLength(minLengthDoorNumber)]),
      phoneNumber: this.fb.control(null, [Validators.required, Validators.pattern(phoneNumberRegex)]),
    }),
    nationalityDetails: this.fb.group({
      nationality: this.fb.control(null, [Validators.required, Validators.pattern(residentDateSinceRegex)]),
      residencePermitType: this.fb.control(null, [Validators.required]),
      residencePermitValidTill: this.fb.control(null, [Validators.required, Validators.pattern(residencePermitValidTillRegex)]),
      countryExceptionCheck: this.fb.control(null, [Validators.required]),
    }),
    backDetails: this.fb.group({
      iban: this.fb.control(null, [Validators.required, Validators.pattern(ibanRegex)]),
    }),
    employmentsDetails: this.fb.group({
      profession: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthProfession), Validators.minLength(minLengthProfession)]),
      netIncome: this.fb.control(null, [Validators.required, Validators.pattern(netIncomeRegex)]),
      industry: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthIndustry), Validators.minLength(minLengthIndustry)]),
      countryOfActivity: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthCountryOfActivity), Validators.minLength(minLengthCountryOfActivity)]),
      employedDateSince: this.fb.control(null, [Validators.required, Validators.pattern(employedDateSinceRegex)]),
      employmentContractType: this.fb.control(null, [Validators.required]),
      employmentContractValidTill: this.fb.control(null, [Validators.required, Validators.pattern(employmentContractValidTillRegex)]),
      employerZipCode: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthZipCode), Validators.min(minLengthZipCode)]),
      employerCity: this.fb.control(null,  [Validators.required, Validators.maxLength(maxLengthCity), Validators.minLength(minLengthCity), Validators.pattern(cityRegex)]),
      employerStreet: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthStreet), Validators.minLength(minLengthStreet)]),
      employerDoorNumber: this.fb.control(null, [Validators.required, Validators.maxLength(maxLengthDoorNumber), Validators.minLength(minLengthDoorNumber)]),
    }),
    familyDetails: this.fb.group({
      housingType: this.fb.control(null, [Validators.required]),
      rent: this.fb.control(null, [Validators.required, Validators.pattern(rentRegex)]),
      childrenCheck: this.fb.control(null, [Validators.required]),
      numberOfChildren: this.fb.control(null, [Validators.required]),
    }),
  });

  onBack() {
    console.log(this.CwpFlowService.CWPFlowStepActive.value);
    scrollToTop();
    this.CwpFlowService.stepBackwards();
  }

  test(t?: string) {
    console.log(this.personalDataControl.controls['firstName'].valid);
    t ? console.log(t) : console.log('nada');
  }
  onNext() {
    this.isSubmited = true;

    if (
      this.personalDataControl.controls['firstName'].invalid ||
      this.personalDataControl.controls['lastName'].invalid
    ) {
      console.log('ola');
      return;
    } else {
      this.CwpFlowService.stepForwards();
      this.isSubmited = false;
    }
  }

  // get isCurrentStepValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }

  // get isNextValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }
  /*
  get userForm() {
    return this.CWPForm.get('user') as FormGroup;
  }*/

  // private checkIfValid(step: CWPFlowStepsSequence) {
  //   switch (step) {
  //     case CWPFlowStepsSequence.personalData:
  //       return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.contactDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.nationality:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.bankDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.employmentDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.regularExpenses:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.overallOverview:
  //     //   return this.salutationControl.valid;
  //     default:
  //       return false;
  //   }
  // }

  private get salutationControl() {
    console.log(this.CWPForm.controls['salutation']);
    return this.CWPForm.controls['salutation'];
  }

  get firstNameControl() {
    return this.CWPForm.controls['firstName'];
  }

  get personalDataControl() {
    return this.CWPForm.controls['personalData'] as FormGroup;
  }
  get lastNameControl() {
    return this.CWPForm.controls['lastName'];
  }

  public get userFormGroup() {
    return this.CWPForm.get('user') as FormGroup;
  }

  public submitForm() {
    if (!this.CWPForm.valid) {
      return;
    }
    console.log(this.CWPForm.value);
  }

  getControl(name: any): AbstractControl | null {
    return this.CWPForm.get(name);
  }
}
