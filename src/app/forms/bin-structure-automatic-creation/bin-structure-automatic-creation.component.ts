import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BinAutoCreateTemplateComponent } from '../../tables/bin-auto-create-template/bin-auto-create-template.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import numeral from 'numeral'

@Component({
  selector: 'app-bin-structure-automatic-creation',
  templateUrl: './bin-structure-automatic-creation.component.html',
  styleUrls: ['./bin-structure-automatic-creation.component.css']
})
export class BinStructureAutomaticCreationComponent implements OnInit {

  selectedTemplate: any;
  customHeaderForBinCreate: any;
  submitted = false;
  firstletterCharPattern = '^[a-zA-Z].*';
  onlyNumberPattern = '^[0-9]*$';
  onlyCharacterPattern = '^[a-zA-Z \-\']+';

  // ***************


  public form: FormGroup;
  public headerForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { 
this.headerFormCofiguration();

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

  ngOnInit(): void {
 
  }

  openDialog(): void {
    if(this.headerForm.invalid) {
      return;
    } else {
      const dialogRef = this.dialog.open(BinAutoCreateTemplateComponent, {
        width: '800px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.selectedTemplate = result;
          this.headerForBinCreateTable();
          this.onTemplateSelect();
          document.getElementById('table').innerHTML ='' ;
        } else {
          return;
        }
  
  
      });
    }

  }
  onTemplateSelect() {

    if(this.selectedTemplate.structure == 'CNN-NN-NN') {
    this.firstTemplateConfiguration();
 
    }
    else if(this.selectedTemplate.structure =='NNN-NN-C') {
    
    this.secondTemplateConfiguration();
    }else if(this.selectedTemplate.structure =='NN-NN') {
  
      this.thirdTemplateConfiguration();
      }

  }

  thirdTemplateConfiguration() {
    this.form = this.fb.group({
      colOneStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
   

      colOneEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
  



      colOneIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
   
    })
  }
  secondTemplateConfiguration() {
    this.form = this.fb.group({
      colOneStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(1),
            Validators.pattern(this.onlyCharacterPattern)
        ])
      ],

      colOneEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(1),
            Validators.pattern(this.onlyCharacterPattern)
        ])
      ],



      colOneIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
    })
  }


  firstTemplateConfiguration() {
    this.form = this.fb.group({
      colOneStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
            Validators.pattern(this.firstletterCharPattern)
        ])
      ],
      colTwoStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeStart: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],

      colOneEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
            Validators.pattern(this.firstletterCharPattern)
        ])
      ],
      colTwoEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeEnd: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],



      colOneIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colTwoIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
      colThreeIncr: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
            Validators.pattern(this.onlyNumberPattern)
        ])
      ],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {

        return;
    } else if(this.selectedTemplate.structure == 'CNN-NN-NN') {
      this.binCreationForFirstTemplate();

    }else if(this.selectedTemplate.structure == 'NNN-NN-C') {
      this.binCreationForSecondTemplate();

    }else if(this.selectedTemplate.structure == 'NN-NN') {
      this.binCreationForThirdTemplate();

    }
    
}
binCreationForThirdTemplate() {
  let shelfStart= parseInt(this.form.value.colOneStart.charAt((this.form.value.colOneStart).length-1));
  let shelfEnd = parseInt(this.form.value.colOneEnd.charAt((this.form.value.colOneEnd).length-1));
  let levelStart = parseInt(this.form.value.colTwoStart.charAt((this.form.value.colTwoStart).length-1));
  let levelEnd = parseInt(this.form.value.colTwoEnd.charAt((this.form.value.colTwoEnd).length-1));
  let shelfIncrement = parseInt(this.form.value.colOneIncr.charAt((this.form.value.colOneIncr).length-1));
  let levelIncrement = parseInt(this.form.value.colTwoIncr.charAt((this.form.value.colTwoIncr).length-1));
  this.genrateTableForThirdTemplate(shelfStart,shelfEnd,levelStart,levelEnd,shelfIncrement,levelIncrement);
}

binCreationForSecondTemplate() {
  let char = (this.form.value.colThreeStart);
  let shelfStart= parseInt(this.form.value.colOneStart.charAt((this.form.value.colOneStart).length-1));
  let shelfEnd = parseInt(this.form.value.colOneEnd.charAt((this.form.value.colOneEnd).length-1));
  let levelStart = parseInt(this.form.value.colTwoStart.charAt((this.form.value.colTwoStart).length-1));
  let levelEnd = parseInt(this.form.value.colTwoEnd.charAt((this.form.value.colTwoEnd).length-1));
  let shelfIncrement = parseInt(this.form.value.colOneIncr.charAt((this.form.value.colOneIncr).length-1));
  let levelIncrement = parseInt(this.form.value.colTwoIncr.charAt((this.form.value.colTwoIncr).length-1));
  this.genrateTableForSecondTemplate(char,shelfStart,shelfEnd,levelStart,levelEnd,shelfIncrement,levelIncrement);

}

binCreationForFirstTemplate() {

  let char =this.form.value.colOneStart.charAt(0);
  let shelfStart= parseInt(this.form.value.colOneStart.charAt((this.form.value.colOneStart).length-1));
  let shelfEnd = parseInt(this.form.value.colOneEnd.charAt((this.form.value.colOneEnd).length-1));
  let levelStart = parseInt(this.form.value.colTwoStart.charAt((this.form.value.colTwoStart).length-1));
  let levelEnd = parseInt(this.form.value.colTwoEnd.charAt((this.form.value.colTwoEnd).length-1));
  let stackstart = parseInt(this.form.value.colThreeStart.charAt((this.form.value.colThreeStart).length-1));
  let stackEnd = parseInt(this.form.value.colThreeEnd.charAt((this.form.value.colThreeEnd).length-1));
  let shelfIncrement = parseInt(this.form.value.colOneIncr.charAt((this.form.value.colOneIncr).length-1));
  let levelIncrement = parseInt(this.form.value.colTwoIncr.charAt((this.form.value.colTwoIncr).length-1));
  let stackIncrement = parseInt(this.form.value.colThreeIncr.charAt((this.form.value.colThreeIncr).length-1));
  this.genrateTableForFirstTemplate(char,shelfStart,shelfEnd,levelStart,levelEnd,stackstart,stackEnd,shelfIncrement,levelIncrement,stackIncrement);
}
  

  headerForBinCreateTable() {
    this.customHeaderForBinCreate = this.selectedTemplate['description'].split('-')

  }


  shelfStart: number = 1;
  shelfEnd: number = 3;
  levelStart: number = 1;
  levelEnd: number = 8;
  stackstart: number = 1;
  stackEnd: number = 12;
  shelfIncrement: number = 1;
  levelIncrement: number = 1;
  stackIncrement: number = 1;

  // template = "CNN-NN-NN"


  getFormated(value: number, pattern: string, c: string) {
    if (pattern == "NN") {
      return numeral(value).format('00');
    }
    if (pattern == "CNN") {
      return c + numeral(value).format('00');
    }
    if (pattern == "NNN") {
      return numeral(value).format('000');
    }

  }


genrateTableForFirstTemplate(char,shelfStart,shelfEnd,levelStart,levelEnd,stackstart,stackEnd,shelfIncrement,levelIncrement,stackIncrement) {
console.log(typeof(shelfStart),'shelfStart');
console.log(shelfEnd,'shelfEnd');
console.log(levelStart,'levelStart');
console.log(levelEnd,'levelEnd');
console.log(stackstart,'stackstart');
console.log(stackEnd,'stackEnd');
console.log(shelfIncrement,'shelfIncrement');
console.log(levelIncrement,'levelIncrement');
console.log(stackIncrement,'stackIncrement');

    var labels: any = []

    for (let i = shelfStart; i <= shelfEnd; i = i + shelfIncrement) {
      let labelShelf: number = i
      for (let j = levelStart; j <= levelEnd; j = j + levelIncrement) {
        let labelLevel: number = j

        for (let k = stackstart; k <= stackEnd; k = k + stackIncrement) {
          let labelStack: number = k;

          let templateSplit = this.selectedTemplate.structure.split("-");
         
            labels.push(`<b>${this.getFormated(labelShelf, templateSplit[0], char)}-${this.getFormated(labelLevel, templateSplit[1], "")}-${this.getFormated(labelStack, templateSplit[2], "")}</b>`)
 
        }
      }
    }
     this.divideChunks(labels)
    
  }


  genrateTableForThirdTemplate(shelfStart,shelfEnd,levelStart,levelEnd,shelfIncrement,levelIncrement) {
    var labels: any = []

    for (let i = shelfStart; i <= shelfEnd; i = i + shelfIncrement) {
      let labelShelf: number = i
      for (let j = levelStart; j <= levelEnd; j = j + levelIncrement) {
        let labelLevel: number = j

        let templateSplit = this.selectedTemplate.structure.split("-");
         
        labels.push(`<b>${this.getFormated(labelShelf, templateSplit[0], '')}-${this.getFormated(labelLevel, templateSplit[1], "")}</b>`)
      }
    }
    this.divideChunks(labels)
  }


  genrateTableForSecondTemplate(char,shelfStart,shelfEnd,levelStart,levelEnd,shelfIncrement,levelIncrement) {
    console.log((shelfStart),'shelfStart');
    console.log(shelfEnd,'shelfEnd');
    console.log(levelStart,'levelStart');
    console.log(levelEnd,'levelEnd');
    console.log(shelfIncrement,'shelfIncrement');
    console.log(levelIncrement,'levelIncrement');
    console.log(char,'char');
 
    var labels: any = []

    for (let i = shelfStart; i <= shelfEnd; i = i + shelfIncrement) {
      let labelShelf: number = i
      for (let j = levelStart; j <= levelEnd; j = j + levelIncrement) {
        let labelLevel: number = j

        let templateSplit = this.selectedTemplate.structure.split("-");
         
        labels.push(`<b>${this.getFormated(labelShelf, templateSplit[0], char)}-${this.getFormated(labelLevel, templateSplit[1], "")}-${char}</b>`)
      }
    }
    this.divideChunks(labels)
    
  }

  divideChunks(array) {

    const totalRows = 10;
    let finalData = '<table>';
    let count = 0;
    for(let row = 0; row < totalRows; row++){
      finalData +='<tr>';
      for(let cell = 0; cell<array.length/totalRows; cell++){
        if(count >= array.length){
          break;
        }
        finalData += `<td style="border: 1px solid lightgrey; font-size: 10px; padding : 4px">${array[count]}</td>`
        count++;
      }
      finalData += '</tr>';
    }
    
    finalData += '</table>';
  
    document.getElementById('table').innerHTML = finalData;

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
