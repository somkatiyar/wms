import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListCreationComponent } from './pick-list-creation.component';

describe('PickListCreationComponent', () => {
  let component: PickListCreationComponent;
  let fixture: ComponentFixture<PickListCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickListCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
