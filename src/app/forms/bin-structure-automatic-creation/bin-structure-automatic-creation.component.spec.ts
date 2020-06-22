import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinStructureAutomaticCreationComponent } from './bin-structure-automatic-creation.component';

describe('BinStructureAutomaticCreationComponent', () => {
  let component: BinStructureAutomaticCreationComponent;
  let fixture: ComponentFixture<BinStructureAutomaticCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinStructureAutomaticCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinStructureAutomaticCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
