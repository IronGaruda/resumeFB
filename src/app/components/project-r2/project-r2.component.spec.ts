import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectR2Component } from './project-r2.component';

describe('ProjectR2Component', () => {
  let component: ProjectR2Component;
  let fixture: ComponentFixture<ProjectR2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectR2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectR2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
