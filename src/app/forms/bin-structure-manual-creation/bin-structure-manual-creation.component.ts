import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { BinAutoCreateTemplateComponent } from '../../tables/bin-auto-create-template/bin-auto-create-template.component';
export interface BinCellArray {
  cellNo: string;
}
@Component({
  selector: 'app-bin-structure-manual-creation',
  templateUrl: './bin-structure-manual-creation.component.html',
  styleUrls: ['./bin-structure-manual-creation.component.css']
})
export class BinStructureManualCreationComponent implements OnInit{

  public headerForm: FormGroup;
  selectedTemplate: any;
  isTemplateSelect: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  binCellArray: BinCellArray[] = [
 
  ];

  patternOne ="^[a-zA-Z]{1}+\d{2}-\d{2}-\d{2}";
  patternTwo = '^\d{3}-\d{2}-[a-zA-Z]';
  patternThree = "^\d{2}-\d{2}";

  public templateSelectForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.headerFormCofiguration();
      }
    
    
    
      ngOnInit() {
    
    
    
      }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.binCellArray.push({cellNo: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: BinCellArray): void {
    const index = this.binCellArray.indexOf(fruit);

    if (index >= 0) {
      this.binCellArray.splice(index, 1);
    }
  }


  headerFormCofiguration() {
    this.headerForm = this.fb.group({
      warehouseName: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      warehouseNumber: [
        null,
        Validators.compose([
        ])
      ],
      storageType: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      storageNumber: [
        null,
        Validators.compose([
        ])
      ],
      storageSection: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      storageSectionNumber: [
        null,
        Validators.compose([
        ])
      ],
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BinAutoCreateTemplateComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedTemplate = result;
     this.onTemplateSelect();
      } else {
        return;
      }


    });
  }

  onTemplateSelect() {


    if(this.selectedTemplate.structure == 'CNN-NN-NN') {
    this.templateSelectOne();
     
    }
    else if(this.selectedTemplate.structure =='NNN-NN-C') {

    this.templateSelectTwo();
    }else if(this.selectedTemplate.structure =='NN-NN') {
this.templateSelectThree()
      }

  }


templateSelectOne() {

  this.templateSelectForm = this.fb.group({
    binCellNumber: [
      null,
      Validators.compose([
        Validators.required,
          Validators.pattern(this.patternOne)
      ])
    ],
})
}

templateSelectTwo() {
  this.templateSelectForm = this.fb.group({
    binCellNumber: [
      null,
      Validators.compose([
        Validators.required,
          Validators.pattern(this.patternTwo)
      ])
    ],
})
}
templateSelectThree() {
    this.templateSelectForm = this.fb.group({
    binCellNumber: [
      null,
      Validators.compose([
        Validators.required,
          Validators.pattern(this.patternTwo)
      ])
    ],
})
}

  onRadioChange(event) {
    if(event.value == '1') {
      this.isTemplateSelect = false;
      this.selectedTemplate ='';
    } else {
     this.isTemplateSelect = true;
    }

  }




  onWarehouseChange(e) {

    this.headerForm.controls['warehouseNumber'].setValue(e.value)
  
    }
    onStorageTypeChange(e) {
      this.headerForm.controls['storageNumber'].setValue(e.value)
  
    }
  
    onSectionChange(e) {
      this.headerForm.controls['storageSectionNumber'].setValue(e.value)
  
    }
}

