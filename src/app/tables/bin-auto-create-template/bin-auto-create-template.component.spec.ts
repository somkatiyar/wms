import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinAutoCreateTemplateComponent } from './bin-auto-create-template.component';

describe('BinAutoCreateTemplateComponent', () => {
  let component: BinAutoCreateTemplateComponent;
  let fixture: ComponentFixture<BinAutoCreateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinAutoCreateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinAutoCreateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
