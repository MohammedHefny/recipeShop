import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCompComponent } from './learn-comp.component';

describe('LearnCompComponent', () => {
  let component: LearnCompComponent;
  let fixture: ComponentFixture<LearnCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
