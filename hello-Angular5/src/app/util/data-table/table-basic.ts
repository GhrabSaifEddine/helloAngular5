import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IDeveloper} from "../../services/interfaces";
import {any} from "codelyzer/util/function";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table-basic',
  styleUrls: ['table-basic.css'],
  templateUrl: 'table-basic.html',
})
export class TableBasicComponent implements OnInit {

  developers: IDeveloper[] = [];
  displayedColumns: string[];
  dataSource: IDeveloper[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllDevelopers()
      .subscribe((data: IDeveloper[]) => {
      this.developers = data;
      console.log(this.developers);
      });
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
  }
}
