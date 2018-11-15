import {Component, OnInit} from '@angular/core';
import { ILangageProgrammation} from '../services/interfaces';
import {DataService} from '../services/data.service';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-langage-component',
  styleUrls: ['langage-component.css'],
  templateUrl: 'langage-component.html',
})
export class LangageComponent implements OnInit {

  dataSource = new MatTableDataSource<ILangageProgrammation>([]);
  selection = new SelectionModel<ILangageProgrammation>(true, []);
  displayedColumns: string[] = ['select', 'idLanguage', 'libelleLanguage'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllLangages()
      .subscribe((data: ILangageProgrammation[]) => {
        this.dataSource = new MatTableDataSource<ILangageProgrammation>(data);
      });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  addLangage() {
    this.dataSource.data.push({idLanguage: null, libelleLanguage: ''})
    this.dataSource = new MatTableDataSource<ILangageProgrammation>(this.dataSource.data);
  }

  saveLangages() {
    this.dataService.saveLangages(this.dataSource.data)
      .subscribe((data: ILangageProgrammation[]) => {
        this.dataSource = new MatTableDataSource<ILangageProgrammation>(data);
      });
  }
}
