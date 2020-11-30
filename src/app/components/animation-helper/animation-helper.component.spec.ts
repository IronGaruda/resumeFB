import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationHelperComponent } from './animation-helper.component';

describe('AnimationHelperComponent', () => {
  let component: AnimationHelperComponent;
  let fixture: ComponentFixture<AnimationHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
