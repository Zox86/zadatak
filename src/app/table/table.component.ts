import { MatFormFieldControl } from '@angular/material/form-field';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
export interface Folder {}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public url = [];
  public url2 = [];
  public url3 = [];
  filterControl = new FormControl();
  filterFolder = ['name', 'creationDate'];
  filterDocument = ['creationDate', 'name', 'docDate', 'notice', 'docType'];
  filterInvoice = [
    'priority',
    'creationDate',
    'totalAmount',
    'name',
    'currency',
    'invoiceDate',
    'invoiceNumber',
  ];
  selectFolder = ['true', 'false'];

  constructor(private dataService: DataService, public dialog: MatDialog) {}
  ngOnInit() {
    this.dataService.getUrl().subscribe((data) => (this.url = data));
    this.dataService.getUrl2().subscribe((data) => (this.url2 = data));
    this.dataService.getUrl3().subscribe((data) => (this.url3 = data));
  }
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj,
    });
  }
}
