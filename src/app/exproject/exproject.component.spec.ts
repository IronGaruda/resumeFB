import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprojectComponent } from './exproject.component';

describe('ExprojectComponent', () => {
  let component: ExprojectComponent;
  let fixture: ComponentFixture<ExprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
