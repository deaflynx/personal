///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Table } from 'primeng/table';

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
export class TbTableComponent implements AfterViewInit {

  @ViewChild('dt') dt: Table;
  cars = []
  dataKey = 'vin'

  constructor() {
    for(let i=0; i < 100; i++) {
      this.cars.push(
        { year: 2000, brand: 'Audi', color: 'green' },
        { year: 2010, brand: 'BMW', color: 'red' },
        { year: 2020, brand: 'Mercedes', color: 'blue' },
        { year: 2000, brand: 'Audi', color: 'green' },
        { year: 2010, brand: 'BMW', color: 'red' },
        { year: 2020, brand: 'Mercedes', color: 'blue' },
        { year: 2000, brand: 'Audi', color: 'green' },
        { year: 2010, brand: 'BMW', color: 'red' },
        { year: 2020, brand: 'Mercedes', color: 'blue' },
        { year: 2000, brand: 'Audi', color: 'green' },
      )
    }
    this.cars.forEach((o,i) => o['vin'] = i)
  }

  ngAfterViewInit(): void {
    this.dt.scrollableViewChild.virtualScrollBody.elementScrolled()
      .subscribe(event => {
        this.updateRowHighlight();
      });
  }

  select(data: any) {
    this.updateRowHighlight();
  }

  unselect(data: any) {
    this.updateRowHighlight();
  }

  private updateRowHighlight(){
    const elements = document.getElementsByClassName('ui-selectable-row');
    for (let i = 0 ; i < elements.length; i++){
      const ngContext = elements[i]['__ngContext__'];
      const index = ngContext[1]['bindingStartIndex'];
      const dataKeyValue = ngContext[index][this.dataKey];
      if( !this.dt.selection || this.dt.selection[this.dataKey] !== dataKeyValue ){
        elements[i].classList.remove('ui-state-highlight');
      }
      else{
        elements[i].classList.add('ui-state-highlight');
      }
    }
  }

}
