import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillboxComponent } from './skillbox.component';

describe('SkillboxComponent', () => {
  let component: SkillboxComponent;
  let fixture: ComponentFixture<SkillboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
