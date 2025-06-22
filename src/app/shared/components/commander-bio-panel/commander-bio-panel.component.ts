import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../ui/section-title/section-title.component';

@Component({
  selector: 'app-commander-bio-panel',
  standalone: true,
  imports: [CommonModule,
    SectionTitleComponent
  ],
  templateUrl: './commander-bio-panel.component.html',
  styleUrl: './commander-bio-panel.component.scss'
})
export class CommanderBioPanelComponent {

}
