import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommanderListItem } from '../../../models/commander-list-item.model';

@Component({
  selector: 'app-commander-list',
  standalone: false,
  templateUrl: './commander-list.component.html',
  styleUrl: './commander-list.component.scss'
})

export class CommanderListComponent {
  @Input() items: CommanderListItem[] = [];
  @Input() appliedGuiseId: number | null = null;
  @Input() selectedItemId: number | null = null;
  @Output() itemSelected = new EventEmitter<CommanderListItem>();

  select(item: CommanderListItem) {
    this.itemSelected.emit(item);
  }
}