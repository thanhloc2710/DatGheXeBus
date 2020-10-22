import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedChairComponentComponent } from './booked-chair-component.component';

describe('BookedChairComponentComponent', () => {
  let component: BookedChairComponentComponent;
  let fixture: ComponentFixture<BookedChairComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedChairComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedChairComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
