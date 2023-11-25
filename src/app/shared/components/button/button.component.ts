import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'round'
    | 'round-secondary'
    | 'ghost' = 'primary';
  @Input() icon = false;
  @Input() width = 0;
  @Input() height = 0;
  @Input() smallText: boolean = false;

  @Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  get widthPx() {
    return !!this.width ? `${this.width}px` : null;
  }

  get heightPx() {
    return !!this.height ? `${this.height}px` : null;
  }
}
