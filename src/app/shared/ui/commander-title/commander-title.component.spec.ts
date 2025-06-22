import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderTitleComponent } from './commander-title.component';

describe('CommanderTitleComponent', () => {
  let component: CommanderTitleComponent;
  let fixture: ComponentFixture<CommanderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
