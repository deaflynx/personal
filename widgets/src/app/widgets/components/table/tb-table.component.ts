///
/// Copyright © 2021 ThingsBoard, Inc.
///

import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Table } from 'primeng/table';
import { FilterUtils } from 'primeng/utils';

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

  cars = [];
  dataKey = 'vin';
  yearFilter;
  cols;
  brands;
  colors;
  totalRecords;

  yearTimeout: any;


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
    this.cars.forEach((o,i) => o['vin'] = i);
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    }

  }

  ngAfterViewInit(): void {
    this.dt.scrollableViewChild.virtualScrollBody.elementScrolled()
      .subscribe(event => {
        this.updateRowHighlight();
      });
  }

  public selectionItemForFilter(e) {
    const colsTempor = e.value;
    colsTempor.sort(function (a, b) {
      return a.index - b.index;
    });
    this.cols = [];
    this.cols = colsTempor;
    if (e.value.length > 10) {
      e.value.pop();
    }
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
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
