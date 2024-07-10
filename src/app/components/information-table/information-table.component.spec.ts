import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTableComponent } from './information-table.component';

describe('InformationTableComponent', () => {
  let component: InformationTableComponent;
  let fixture: ComponentFixture<InformationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationTableComponent]
    });
    fixture = TestBed.createComponent(InformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
