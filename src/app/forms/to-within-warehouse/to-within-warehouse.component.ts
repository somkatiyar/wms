
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ToMaterialPopupComponent } from '../../tables/to-material-popup/to-material-popup.component';


/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'app-to-within-warehouse',
  templateUrl: './to-within-warehouse.component.html',
  styleUrls: ['./to-within-warehouse.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})


export class TOWithinWarehouseComponent implements OnInit {

  addForm: FormGroup;

  rows: FormArray;
  materials: any = [
    { storageTypeNo: "sty-1", storageTypeName: "STORAGE TYPE 1", sectionNo: "03", sectionName: "SECTION 3", storageBinCellNo: "012-L02-007", qtyInBinCell: 30, unit: "BUNDLES" },
    { storageTypeNo: "sty-2", storageTypeName: "STORAGE TYPE 2", sectionNo: "05", sectionName: "SECTION 5", storageBinCellNo: "012-L02-009", qtyInBinCell: 10, unit: "BUNDLES" },


  ];
  onlyNumberPattern = '^[0-9]*$';
  totalQtyCount: any;
  isTO: boolean = false;
  isGroupListData: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  finalGroup: FormGroup;
  currentDate = new Date();
  selectedMaterial: any;
  selectedMaterialArray: any = [];
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {

    this.addForm = this._formBuilder.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this._formBuilder.array([]);
  }

  getControls() {
    return (this.addForm.get('rows') as FormArray).controls;
  }

  onAddRow() {


    this.rows.push(this.createItemFormGroup());

  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this._formBuilder.group({
      destStorageTypeNo: null,
      destStorageTypeName: null,
      destSectionNo: null,
      destSectionName: null,
      destLineNo: null,
      destBinNo: null,
      destqty: null,
      destUnit: null

    });
  }

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
    this.onAddRow()
    this.firstFormGroup = this._formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseNumber:[''],
      pickingDateTime: [this.currentDate, Validators.required],
      movementType: ['', Validators.required],
      material: ['', Validators.required],
      materialDesc: ['', Validators.required],
      matQty: ['',Validators.compose([Validators.required, Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      matUnit: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      toDate: ['', Validators.required],
      toType: ['', Validators.required],
      matCount: ['', Validators.required],
      warehouse: ['', Validators.required],

      movementType: ['', Validators.required],
      material: ['', Validators.required],
      materialDesc: ['', Validators.required],
      matQty: ['', Validators.required],
      matUnit: ['', Validators.required],

    });

    this.finalGroup = this._formBuilder.group({
      // val1: [''],
      selectedMatArray: this._formBuilder.array([]),
      selectedMatApiData: this._formBuilder.array([])


    });


  }
  get selectedMatArray() {
    return this.finalGroup.get("selectedMatArray") as FormArray;
  }
  get selectedMatApiData() {
    return this.finalGroup.get("selectedMatApiData") as FormArray;
  }


  addMaterial() {
    if (this.firstFormGroup.invalid) {
      return;
    } else {
      this.selectedMaterialArray = [];
      this.finalGroup = this._formBuilder.group({
        // val1: [''],
        selectedMatArray: this._formBuilder.array([]),
        selectedMatApiData: this._formBuilder.array([])
  
      });
      alert('Material added successfully..')
      this.bindMaterialToFormarray();
    }
  }
  bindMaterialToFormarray() {
    this.secondFormGroup.controls['toDate'].setValue(this.currentDate.getDate());
    this.secondFormGroup.controls['toType'].setValue(this.firstFormGroup.controls['movementType'].value);
    this.secondFormGroup.controls['matCount'].setValue(this.firstFormGroup.controls['matQty'].value);
    this.secondFormGroup.controls['warehouse'].setValue(this.firstFormGroup.controls['warehouseName'].value);
    this.secondFormGroup.controls['movementType'].setValue(this.firstFormGroup.controls['movementType'].value);

    this.selectedMaterialArray.push({
      'matName': this.firstFormGroup.controls['material'].value,
      'matDesc': this.firstFormGroup.controls['materialDesc'].value,
      'matQty': this.firstFormGroup.controls['matQty'].value,
      'matUnit': this.firstFormGroup.controls['material'].value,
      'matApi': this.materials

    })
    this.selectedMaterialArray.map(d =>
      this.selectedMatArray.push(this._formBuilder.group({
        matName: this.firstFormGroup.controls['material'].value,
        matDesc: this.firstFormGroup.controls['materialDesc'].value,
        matQty: this.firstFormGroup.controls['matQty'].value,
        matUnit: this.firstFormGroup.controls['matUnit'].value,

      }))
    );

    this.selectedMaterialArray.map(d =>
      this.selectedMatApiData.push(this._formBuilder.group({
        matApi: this.materials.forEach(element => {
          return element.storageTypeNo
        })

      }))
    );
    console.log(this.selectedMaterialArray, 'kkkk');
  }

  clickNextOnFirstScreen() {




  }

  onWarehouseChange(e) {
    this.firstFormGroup.controls['warehouseNumber'].setValue(e.value)
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ToMaterialPopupComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedMaterial = result;
        this.firstFormGroup.controls['material'].setValue(result.matName);
        this.firstFormGroup.controls['materialDesc'].setValue(result.matDesc)

      } else {
        return;
      }


    });
  }



  getDestTotalQty(e) {
    // if (e.target.value > 40) {
    
    // } else {
    //   return;
    // }
  console.log(e.target.value);
  
  console.log(this.rows);

  }


  saveData() {

  }




}
