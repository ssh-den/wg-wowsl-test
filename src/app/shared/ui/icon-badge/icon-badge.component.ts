import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-badge',
  imports: [],
  standalone: true,
  templateUrl: './icon-badge.component.html',
  styleUrl: './icon-badge.component.scss'
})
export class IconBadgeComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imageUrl: string = '';

}
