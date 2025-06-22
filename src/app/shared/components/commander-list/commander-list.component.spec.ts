import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderListComponent } from './commander-list.component';

describe('CommanderListComponent', () => {
  let component: CommanderListComponent;
  let fixture: ComponentFixture<CommanderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
