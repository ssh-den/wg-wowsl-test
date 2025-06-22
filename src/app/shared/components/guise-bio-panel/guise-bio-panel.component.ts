import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../ui/section-title/section-title.component';

@Component({
  selector: 'app-guise-bio-panel',
  standalone: true,
  imports: [CommonModule,
    SectionTitleComponent
  ],
  templateUrl: './guise-bio-panel.component.html',
  styleUrl: './guise-bio-panel.component.scss'
})
export class GuiseBioPanelComponent {

}
