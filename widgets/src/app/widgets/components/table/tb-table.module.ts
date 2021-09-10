///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TbTableComponent } from './tb-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TbTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TbTableComponent
  ]
})
export class TbTableModule {
}
