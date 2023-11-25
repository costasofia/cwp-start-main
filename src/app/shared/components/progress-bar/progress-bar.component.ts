import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CWPFlowStepsSequence } from 'src/app/cwp-flow/enums/cwp-flow-steps-sequence.enum';
import { CwpFlowControlService } from 'src/app/cwp-flow/services/cwp-flow-control.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  currentStep: CWPFlowStepsSequence =
    this.CwpFlowService.CWPFlowStepActive.value;
  constructor(public CwpFlowService: CwpFlowControlService) {}
}
