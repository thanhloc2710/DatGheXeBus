import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChairComponentComponent } from './list-chair-component.component';

describe('ListChairComponentComponent', () => {
  let component: ListChairComponentComponent;
  let fixture: ComponentFixture<ListChairComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChairComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChairComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
