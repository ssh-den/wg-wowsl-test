import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiseDetailsPanelComponent } from './guise-details-panel.component';

describe('GuiseDetailsPanelComponent', () => {
  let component: GuiseDetailsPanelComponent;
  let fixture: ComponentFixture<GuiseDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiseDetailsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiseDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
