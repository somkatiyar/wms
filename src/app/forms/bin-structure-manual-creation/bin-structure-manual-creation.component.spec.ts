import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinStructureManualCreationComponent } from './bin-structure-manual-creation.component';

describe('BinStructureManualCreationComponent', () => {
  let component: BinStructureManualCreationComponent;
  let fixture: ComponentFixture<BinStructureManualCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinStructureManualCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinStructureManualCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
