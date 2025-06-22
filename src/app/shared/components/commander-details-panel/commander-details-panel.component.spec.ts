import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderDetailsPanelComponent } from './commander-details-panel.component';

describe('CommanderDetailsPanelComponent', () => {
  let component: CommanderDetailsPanelComponent;
  let fixture: ComponentFixture<CommanderDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderDetailsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
