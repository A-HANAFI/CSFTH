import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardResrelentComponent } from './board-resrelent.component';

describe('BoardResrelentComponent', () => {
  let component: BoardResrelentComponent;
  let fixture: ComponentFixture<BoardResrelentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardResrelentComponent]
    });
    fixture = TestBed.createComponent(BoardResrelentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
