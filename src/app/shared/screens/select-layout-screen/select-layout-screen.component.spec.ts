import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayoutScreenComponent } from './select-layout-screen.component';

describe('SelectLayoutScreenComponent', () => {
  let component: SelectLayoutScreenComponent;
  let fixture: ComponentFixture<SelectLayoutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLayoutScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLayoutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
