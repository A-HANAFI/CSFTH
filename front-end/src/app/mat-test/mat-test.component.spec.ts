import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTestComponent } from './mat-test.component';

describe('MatTestComponent', () => {
  let component: MatTestComponent;
  let fixture: ComponentFixture<MatTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatTestComponent]
    });
    fixture = TestBed.createComponent(MatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
