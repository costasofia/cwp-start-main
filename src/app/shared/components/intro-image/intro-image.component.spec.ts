import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroImageComponent } from './intro-image.component';

describe('IntroImageComponent', () => {
  let component: IntroImageComponent;
  let fixture: ComponentFixture<IntroImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroImageComponent]
    });
    fixture = TestBed.createComponent(IntroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
