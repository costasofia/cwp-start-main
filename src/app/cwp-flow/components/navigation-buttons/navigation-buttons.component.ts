import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CWPFlowSteps } from '../../enums/cwp-flow-steps.enum';
import {
  NavigationButtons,
  emptyNavigationButtons,
} from '../../models/navigation-buttons.model';
import { CWPFlowStepsSequence } from '../../enums/cwp-flow-steps-sequence.enum';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CWPFlowNavigationButtons } from '../../enums/cwp-flow-navigation-buttons.enum copy';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() isValid: Boolean = false;
  @Input() buttonType: CWPFlowNavigationButtons = CWPFlowNavigationButtons.next;
  @Input() navigation: NavigationButtons = emptyNavigationButtons;
  @Input() nextDisabled = false;
  @Input() activeStep: CWPFlowStepsSequence =
    CWPFlowStepsSequence.personalData_salutationAndNamePage;

  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  readonly navigationButtons = CWPFlowNavigationButtons;

  constructor(public CwpFlowService: CwpFlowControlService) {}

  onBack() {
    console.log("click")
    this.CwpFlowService.stepBackwards();
  }

  onNext() {
    if(this.isValid){
    this.CwpFlowService.stepForwards();
    }
    console.log('not valid')
  }
}
