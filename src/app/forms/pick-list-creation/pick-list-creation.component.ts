import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface TransfrerOrderTable {
  transferOrderNo: string;
  transferOrderDate: string;
  deliveryDateTime: string;
  shipToParty: string;
  pickingDateTime: string;
  Material: string;
  storageType: string;
  section: string;
  storageBinCellNo:string,
  qtyUM:string,
  qtyToPick: number;

}
/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'app-pick-list-creation',
  templateUrl: './pick-list-creation.component.html',
  styleUrls: ['./pick-list-creation.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})


export class PickListCreationComponent implements OnInit {
  


  transferOrderTable: TransfrerOrderTable[] = [
    {transferOrderNo: "TO-0304-123456",transferOrderDate: "01-June-2020",deliveryDateTime: "01-June-2020, 02.00 PM",shipToParty: "ABC Lmt",pickingDateTime: "01-June-2020, 02.00 PM", Material: "MHDH889",storageType: "STORAGE TYPE 3",section: "Section 3",storageBinCellNo:"012-L02-007",qtyUM:"bundles",qtyToPick: 200},
    {transferOrderNo: "TO-0304-123457",transferOrderDate: "01-June-2020",deliveryDateTime: "01-June-2020, 02.00 PM",shipToParty: "ABC Lmt",pickingDateTime: "01-June-2020, 02.00 PM", Material: "MHDH890",storageType: "STORAGE TYPE 4",section: "Section 3",storageBinCellNo:"012-L02-007",qtyUM:"bundles",qtyToPick: 200},
    {transferOrderNo: "TO-0304-123458",transferOrderDate: "01-June-2020",deliveryDateTime: "01-June-2020, 02.00 PM",shipToParty: "ABC Lmt",pickingDateTime: "01-June-2020, 02.00 PM", Material: "MHDH891",storageType: "STORAGE TYPE 2",section: "Section 3",storageBinCellNo:"012-L02-007",qtyUM:"bundles",qtyToPick: 200},
    {transferOrderNo: "TO-0304-123459",transferOrderDate: "01-June-2020",deliveryDateTime: "01-June-2020, 02.00 PM",shipToParty: "ABC Lmt",pickingDateTime: "01-June-2020, 02.00 PM", Material: "MHDH892",storageType: "STORAGE TYPE 3",section: "Section 3",storageBinCellNo:"012-L02-007",qtyUM:"bundles",qtyToPick: 200},
    {transferOrderNo: "TO-0304-123460",transferOrderDate: "01-June-2020",deliveryDateTime: "01-June-2020, 02.00 PM",shipToParty: "ABC Lmt",pickingDateTime: "01-June-2020, 02.00 PM", Material: "MHDH893",storageType: "STORAGE TYPE 4",section: "Section 3",storageBinCellNo:"012-L02-007",qtyUM:"bundles",qtyToPick: 200},

  
  ];
  displayedColumns: string[] = ['select','transferOrderNo', 'transferOrderDate', 'deliveryDateTime', 'shipToParty', 'pickingDateTime','Material','storageType','section','storageBinCellNo','qtyUM','qtyToPick'];
  dataSource = new MatTableDataSource<TransfrerOrderTable>();
  selection = new SelectionModel<TransfrerOrderTable>(true, []);
  
  groupList: any;
  isTO: boolean = false;
  isGroupListData:boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currentDate = new Date();
  constructor(private _formBuilder: FormBuilder) {
    // this.currentDate.setDate(this.currentDate.getDate() + 1);

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseNumber:[''],
      pickingDateTime:[this.currentDate, Validators.required],
      movementType: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      groupList: ['', Validators.required],
      assignTo: ['', Validators.required],
      warehouseName:[''],
      warehouseNumber:['']
      
    });
  }
  onWarehouseChange(e) {
    this.firstFormGroup.controls['warehouseNumber'].setValue(e.value);
  }
  gotoSecondScreen() {
    this.secondFormGroup.controls['warehouseName'].setValue(this.firstFormGroup.controls['warehouseName'].value)
    this.secondFormGroup.controls['warehouseNumber'].setValue(this.firstFormGroup.controls['warehouseNumber'].value)

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

  getSelectedValue() {
    console.log(this.selection.selected)
  }



  getPendingTO() {
    this.dataSource = new MatTableDataSource<TransfrerOrderTable>(this.transferOrderTable);
if(this.dataSource && this.firstFormGroup.valid) {
  this.isTO = true;
} else {

}
      
  }
  saveData() {

  }

  groupForCreatedpickList() {
    var groups = new Set(this.selection.selected.map(item => item.storageType)), 
    results = [];
  groups.forEach(g => 
  results.push({
    name: g, 
    values: this.selection.selected.filter(i => i.storageType === g)
  }
  ))
 
  this.groupList = results;
  if(this.groupList.length && this.secondFormGroup.valid) {
    this.isGroupListData = true;
  } else {
    return;
  }
  }

  
  
}
