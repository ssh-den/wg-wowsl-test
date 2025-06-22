import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateDeviceScreenComponent } from './rotate-device-screen.component';

describe('RotateDeviceScreenComponent', () => {
  let component: RotateDeviceScreenComponent;
  let fixture: ComponentFixture<RotateDeviceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotateDeviceScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotateDeviceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
