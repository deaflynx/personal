///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TbTableComponent } from './tb-table.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    TbTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    ProgressBarModule,
    SliderModule,
    InputTextModule
  ],
  exports: [
    TbTableComponent
  ]
})
export class TbTableModule {
}
