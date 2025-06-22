import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommanderListItem } from '../../../models/commander-list-item.model';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-commander-details',
  standalone: false,
  templateUrl: './commander-details.component.html',
  styleUrl: './commander-details.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(50px)' }))
      ])
    ])
  ]
})
export class CommanderDetailsComponent implements OnChanges {
  @Input() item!: CommanderListItem | null;
  @Input() appliedGuiseId: number | null = null;

  @Output() applyGuise = new EventEmitter<number>();
  @Output() resetToCommander = new EventEmitter<void>();

  showBio = false;
  pendingView: 'commanderDetails' | 'commanderBio' | 'guiseDetails' | 'guiseBio' | null = null;
  visibleView: typeof this.pendingView = null;

  switchView(view: typeof this.pendingView) {
    if (this.visibleView === view) return;
    this.pendingView = view;
    this.visibleView = null;
  }

  onAnimationDone() {
    if (this.pendingView) {
      this.visibleView = this.pendingView;
      this.pendingView = null;
    }
  }

  onShowBio() {
    this.showBio = true;
    this.switchView(this.item?.type === 'COMMANDER' ? 'commanderBio' : 'guiseBio');
  }

  backToDetails() {
    this.showBio = false;
    this.switchView(this.item?.type === 'COMMANDER' ? 'commanderDetails' : 'guiseDetails');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      const first = changes['item'].firstChange;

      const targetView = this.item?.type === 'COMMANDER'
        ? (this.showBio ? 'commanderBio' : 'commanderDetails')
        : (this.showBio ? 'guiseBio' : 'guiseDetails');

      if (first) {
        this.visibleView = targetView;
        this.pendingView = null;
      } else {
        this.switchView(targetView);
      }
    }
  }

  onApply() {
    if (!this.item) return;
    if (this.item.type === 'COMMANDER') {
      this.resetToCommander.emit();
    } else {
      this.applyGuise.emit(this.item.id);
    }
  }
}
