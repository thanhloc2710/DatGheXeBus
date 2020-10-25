import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedBanHangComponent } from './wed-ban-hang.component';

describe('WedBanHangComponent', () => {
  let component: WedBanHangComponent;
  let fixture: ComponentFixture<WedBanHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedBanHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WedBanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
