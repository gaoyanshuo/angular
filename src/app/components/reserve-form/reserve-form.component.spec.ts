import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormComponent } from './reserve-form.component';

describe('ReserveFormComponent', () => {
  let component: ReserveFormComponent;
  let fixture: ComponentFixture<ReserveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveFormComponent]
    });
    fixture = TestBed.createComponent(ReserveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
