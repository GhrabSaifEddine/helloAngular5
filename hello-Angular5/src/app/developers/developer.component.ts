import {Component, OnInit} from '@angular/core';
import {IDeveloper} from '../services/interfaces';
import {DataService} from '../services/data.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-developer-component',
  styleUrls: ['developer-component.css'],
  templateUrl: 'developer-component.html',
})
export class DeveloperComponent implements OnInit {

  displayedColumns = ['idDevelopper', 'nomDevelopper', 'quantity', 'posteDevelopper'];
  developers: IDeveloper[] = [];
  dataSource = new MatTableDataSource(this.developers);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllDevelopers()
      .subscribe((data: IDeveloper[]) => {
        this.developers = data;
        this.dataSource = new MatTableDataSource(this.developers);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
