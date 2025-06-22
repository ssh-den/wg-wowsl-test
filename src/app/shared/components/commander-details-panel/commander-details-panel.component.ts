import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconBadgeComponent } from '../../ui/icon-badge/icon-badge.component';
import { SectionTitleComponent } from '../../ui/section-title/section-title.component';

@Component({
  selector: 'app-commander-details-panel',
  standalone: true,
  imports: [CommonModule,
    IconBadgeComponent,
    SectionTitleComponent
  ],
  templateUrl: './commander-details-panel.component.html',
  styleUrl: './commander-details-panel.component.scss'
})
export class CommanderDetailsPanelComponent {

}
