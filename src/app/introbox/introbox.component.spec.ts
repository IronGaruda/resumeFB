import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroboxComponent } from './introbox.component';

describe('IntroboxComponent', () => {
  let component: IntroboxComponent;
  let fixture: ComponentFixture<IntroboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
