///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule
  ],
  exports: [
    ExampleComponent
  ]
})
export class ExampleModule {
}
