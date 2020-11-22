import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleComponent } from './work-style.component';

describe('WorkStyleComponent', () => {
  let component: WorkStyleComponent;
  let fixture: ComponentFixture<WorkStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
