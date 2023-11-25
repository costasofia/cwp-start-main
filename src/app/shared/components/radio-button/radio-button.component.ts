import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  salutation = ['Frau', 'Herr', 'Divers/Offen'];
  constructor() {}

  @Input() salutationType: string[] =[];
}
