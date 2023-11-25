import { Component } from '@angular/core';
import { CWPFlowStepsSequence } from 'src/app/cwp-flow/enums/cwp-flow-steps-sequence.enum';
import { CwpFlowControlService } from 'src/app/cwp-flow/services/cwp-flow-control.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  constructor(public CwpFlowService: CwpFlowControlService) {}
}
