import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderAvatarMaxComponent } from './commander-avatar-max.component';

describe('CommanderCardComponent', () => {
  let component: CommanderAvatarMaxComponent;
  let fixture: ComponentFixture<CommanderAvatarMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderAvatarMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderAvatarMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
