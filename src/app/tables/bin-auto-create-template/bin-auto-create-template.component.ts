import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface TemplateElement {
  name: string;
  position: number;
  structure: string;
  description: string;
  coordinate:string;
  templateNo:string;
  status:string;
}

const ELEMENT_DATA: TemplateElement[] = [
  {position: 1, name: 'SHELF TEMP', structure: 'CNN-NN-NN', description: 'SHELF-LEVEL-STACK',coordinate:'3',templateNo:'T001',status:'ACTIVE'},
  {position: 2, name: 'ROW LEVEL', structure: 'NNN-NN-C', description: 'ROW-STACK-LEVEL',coordinate:'3',templateNo:'T001',status:'ACTIVE'},
  {position: 3, name: 'SINGLE ROW', structure: 'NN-NN', description: 'STACK-LEVEL',coordinate:'2',templateNo:'T001',status:'ACTIVE'},


];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-bin-auto-create-template',
  templateUrl: './bin-auto-create-template.component.html',
  styleUrls: ['./bin-auto-create-template.component.css']
})
export class BinAutoCreateTemplateComponent {
  selectedTemp: any;
  displayedColumns: string[] = [ 'name', 'structure', 'description','coordinate','templateNo','status'];
  dataSource = new MatTableDataSource<TemplateElement>(ELEMENT_DATA);
  selection = new SelectionModel<TemplateElement>(false, []);
  selectRow(row) {
    this.selectedTemp = row;
  }
  onCancel() {

  }
}

