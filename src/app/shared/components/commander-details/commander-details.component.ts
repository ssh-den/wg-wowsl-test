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
      transition('* => *', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
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
  visibleView: 'commanderDetails' | 'commanderBio' | 'guiseDetails' | 'guiseBio' | null = null;

  switchView(view: NonNullable<typeof this.visibleView>) {
    this.visibleView = view;
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
      const targetView = this.item?.type === 'COMMANDER'
        ? (this.showBio ? 'commanderBio' : 'commanderDetails')
        : (this.showBio ? 'guiseBio' : 'guiseDetails');

      this.switchView(targetView);
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
