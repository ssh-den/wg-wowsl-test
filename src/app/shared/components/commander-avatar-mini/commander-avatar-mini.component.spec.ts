import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderAvatarMiniComponent } from './commander-avatar-mini.component';

describe('CommanderAvatarMiniComponent', () => {
  let component: CommanderAvatarMiniComponent;
  let fixture: ComponentFixture<CommanderAvatarMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderAvatarMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderAvatarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
