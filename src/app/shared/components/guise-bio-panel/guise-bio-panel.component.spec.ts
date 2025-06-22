import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiseBioPanelComponent } from './guise-bio-panel.component';

describe('GuiseBioPanelComponent', () => {
  let component: GuiseBioPanelComponent;
  let fixture: ComponentFixture<GuiseBioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiseBioPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiseBioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
