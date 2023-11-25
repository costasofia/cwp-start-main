import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { CfgLogoComponent } from './components/cfg-logo/cfg-logo.component';
import { IntroImageComponent } from './components/intro-image/intro-image.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ArrowComponent,
    CfgLogoComponent,
    IntroImageComponent,
    ProgressBarComponent,
    RadioButtonComponent, 
    InputFieldComponent

  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [ButtonComponent, ArrowComponent, IntroImageComponent, ArrowComponent, ProgressBarComponent, RadioButtonComponent, InputFieldComponent],
})
export class SharedModule {}
