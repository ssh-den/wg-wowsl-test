import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-commander-avatar-mini',
  standalone: false,
  templateUrl: './commander-avatar-mini.component.html',
  styleUrl: './commander-avatar-mini.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class CommanderAvatarMiniComponent {

  @Input() imageUrl: string = '';
  @Input() alt: string = '';
  @Input() isApplied: boolean = false;
  @Input() isSelected = false;

}
