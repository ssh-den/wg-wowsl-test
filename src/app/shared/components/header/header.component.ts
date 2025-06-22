import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { Commander } from '../../../models/commander.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() user!: User;
  @Input() commander!: Commander;
  @Input() resources: {
    key: string;
    icon: string;
    class?: string;
    suffix?: string;
    isRaw?: boolean;
  }[] = [];

  getUserValue(user: User, key: string): any {
    return (user as any)[key];
  }
}
