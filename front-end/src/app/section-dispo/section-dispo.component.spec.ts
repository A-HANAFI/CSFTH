import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDispoComponent } from './section-dispo.component';

describe('SectionDispoComponent', () => {
  let component: SectionDispoComponent;
  let fixture: ComponentFixture<SectionDispoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionDispoComponent]
    });
    fixture = TestBed.createComponent(SectionDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
