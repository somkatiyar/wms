import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToMaterialPopupComponent } from './to-material-popup.component';

describe('ToMaterialPopupComponent', () => {
  let component: ToMaterialPopupComponent;
  let fixture: ComponentFixture<ToMaterialPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToMaterialPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToMaterialPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
