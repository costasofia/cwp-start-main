import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgLogoComponent } from './cfg-logo.component';

describe('CfgLogoComponent', () => {
  let component: CfgLogoComponent;
  let fixture: ComponentFixture<CfgLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CfgLogoComponent]
    });
    fixture = TestBed.createComponent(CfgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
