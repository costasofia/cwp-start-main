import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CWPFlowStepsSequence } from '../enums/cwp-flow-steps-sequence.enum';
import { CWPFlowNavigationButtons } from '../enums/cwp-flow-navigation-buttons.enum copy';
import { CWPFlowSteps } from '../enums/cwp-flow-steps.enum';

@Injectable({
  providedIn: 'root',
})
export class CwpFlowControlService {
  readonly CWPFlowSteps = CWPFlowSteps;
  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  readonly CWPFlowNavigationButtons = CWPFlowNavigationButtons;
  CWPFlowStepActive = new BehaviorSubject<CWPFlowStepsSequence>(
    CWPFlowStepsSequence.personalData_salutationAndNamePage
  );

  constructor() {}

  stepForwards() {
    this.CWPFlowStepActive.next(
      Math.min(
        CWPFlowStepsSequence.overallOverview,
        this.CWPFlowStepActive.value + 1
      )
    );
    console.log(this.CWPFlowStepActive.value);
  }

  stepBackwards() {
    this.CWPFlowStepActive.next(
      Math.max(
        CWPFlowStepsSequence.personalData_salutationAndNamePage,
        this.CWPFlowStepActive.value - 1
      )
    );
  }

  get CWPFlowStepActiveName() {
    const key: string = this.CWPBlock(this.CWPFlowStepActive.value);
    const CWPFlowStepActiveName =
      this.CWPFlowSteps[key as keyof typeof CWPFlowSteps];
    return CWPFlowStepActiveName;
  }

  get CWPFlowStepsSequenceKeysToArray(): string[] {
    return Object.values(CWPFlowStepsSequence).slice(
      0,
      Object.values(CWPFlowStepsSequence).length / 2
    ) as string[];
  }

  get CWPFlowStepsSequenceValuesToArray(): number[] {
    return Object.values(CWPFlowStepsSequence).filter(
      (value) => typeof value === 'number'
    ) as number[];
  }

  CWPFlowStepNameByStepNumber(stepNumber: CWPFlowStepsSequence): string {
    return CWPFlowStepsSequence[stepNumber];
  }

  CWPFlowStepNumberByStepName(stepName: string): number {
    return Object.values(CWPFlowStepsSequence).filter(
      (value) => value === stepName
    )[0] as number;
  }

  CWPBlock(step: CWPFlowStepsSequence): string {
    switch (true) {
      case step >= 1 && step <= 4:
        return 'personalData';
      case step >= 5 && step <= 7:
        return 'contactDetails';
      case step === 8:
        return 'nationality';
      case step === 9:
        return 'bankDetails';
      default:
        return 'unknownGroup';
    }
  }

  get CWPBlockNames(): string[] {
    return Object.values(this.CWPFlowSteps);
  }
}
