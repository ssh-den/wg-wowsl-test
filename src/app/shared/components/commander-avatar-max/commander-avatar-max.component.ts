import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommanderListItem } from '../../../models/commander-list-item.model';

@Component({
  selector: 'app-commander-avatar-max',
  standalone: false,
  templateUrl: './commander-avatar-max.component.html',
  styleUrl: './commander-avatar-max.component.scss'
})
export class CommanderAvatarMaxComponent implements OnChanges, AfterViewInit {
  @Input() selectedItem: CommanderListItem | null = null;
  @ViewChild('avatarImg') avatarImg!: ElementRef<HTMLImageElement>;

  private hasAnimatedOnce = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedItem'] && this.avatarImg?.nativeElement) {
      const el = this.avatarImg.nativeElement;

      if (el.complete) {
        this.animateIn(el);
      } else {
        el.onload = () => this.animateIn(el);
      }
    }
  }

  ngAfterViewInit(): void {
    const el = this.avatarImg.nativeElement;

    if (el.complete && !this.hasAnimatedOnce) {
      this.animateIn(el);
    } else {
      el.onload = () => this.animateIn(el);
    }
  }

  private animateIn(el: HTMLImageElement): void {
    this.hasAnimatedOnce = true;
    el.style.opacity = '0';
    el.style.transform = 'scale(0.95)';
    void el.offsetWidth;

    el.animate(
      [
        { opacity: 0, transform: 'scale(0.95) translateY(8%)' },
        { opacity: 1, transform: 'scale(1)' }
      ],
      {
        duration: 300,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );
  }
}