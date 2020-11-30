import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGofilesComponent } from './project-gofiles.component';

describe('ProjectGofilesComponent', () => {
  let component: ProjectGofilesComponent;
  let fixture: ComponentFixture<ProjectGofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
