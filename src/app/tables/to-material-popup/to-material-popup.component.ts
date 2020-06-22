import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
export interface MaterialListTable {
  matName: string;
  matDesc: string;
  matCat: string;
  

}
@Component({
  selector: 'app-to-material-popup',
  templateUrl: './to-material-popup.component.html',
  styleUrls: ['./to-material-popup.component.css']
})
export class ToMaterialPopupComponent implements OnInit {
  data: MaterialListTable[] = [
    {matName: "mat1",matDesc: "desc1",matCat: "cat1"},
    {matName: "mat2",matDesc: "desc2",matCat: "cat2"},
    {matName: "mat3",matDesc: "desc3",matCat: "cat3"},
    {matName: "mat4",matDesc: "desc4",matCat: "cat4"},
    {matName: "mat5",matDesc: "desc5",matCat: "cat5"},
    

  
  ];
  selectedTemp: any;
  displayedColumns: string[] = ['matName', 'matDesc', 'matCat'];
  dataSource = new MatTableDataSource<MaterialListTable>(this.data);
  selection = new SelectionModel<MaterialListTable>(false, []);
  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
   let x = this.isAllSelected() ?
        this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}
selectRow(row) {
  this.selectedTemp = row;
  
}

}
