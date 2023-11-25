import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwpFlowComponent } from './cwp-flow.component';

describe('CwpFlowComponent', () => {
  let component: CwpFlowComponent;
  let fixture: ComponentFixture<CwpFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CwpFlowComponent]
    });
    fixture = TestBed.createComponent(CwpFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
