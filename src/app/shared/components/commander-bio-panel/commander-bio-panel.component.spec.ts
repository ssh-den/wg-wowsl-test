import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderBioPanelComponent } from './commander-bio-panel.component';

describe('CommanderBioPanelComponent', () => {
  let component: CommanderBioPanelComponent;
  let fixture: ComponentFixture<CommanderBioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderBioPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderBioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
