import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopScreenComponent } from './desktop-screen.component';

describe('DesktopScreenComponent', () => {
  let component: DesktopScreenComponent;
  let fixture: ComponentFixture<DesktopScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
