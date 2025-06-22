import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../ui/section-title/section-title.component';
import { IconBadgeComponent } from '../../ui/icon-badge/icon-badge.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guise-details-panel',
  imports: [SectionTitleComponent,
    IconBadgeComponent,
    CommonModule
  ],
  standalone: true,
  templateUrl: './guise-details-panel.component.html',
  styleUrl: './guise-details-panel.component.scss'
})
export class GuiseDetailsPanelComponent {

  @Input() effects: { iconUrl: string; title: string; description: string }[] = [];

}
