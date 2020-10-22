import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonVeXeBusComponent } from './chon-ve-xe-bus.component';

describe('ChonVeXeBusComponent', () => {
  let component: ChonVeXeBusComponent;
  let fixture: ComponentFixture<ChonVeXeBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChonVeXeBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonVeXeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
