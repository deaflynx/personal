///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tb-table',
  templateUrl: './tb-table.component.html',
  styleUrls: [
    './tb-table.component.scss',
    '../../../../../node_modules/primeicons/primeicons.css',
    '../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
    '../../../../../node_modules/primeng/resources/primeng.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class TbTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
