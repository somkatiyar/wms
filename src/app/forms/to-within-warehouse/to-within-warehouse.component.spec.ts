import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOWithinWarehouseComponent } from './to-within-warehouse.component';

describe('TOWithinWarehouseComponent', () => {
  let component: TOWithinWarehouseComponent;
  let fixture: ComponentFixture<TOWithinWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOWithinWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOWithinWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
