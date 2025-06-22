import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-commander-title',
  imports: [],
  standalone: true,
  templateUrl: './commander-title.component.html',
  styleUrl: './commander-title.component.scss'
})
export class CommanderTitleComponent implements OnChanges {
  @Input() title = '';
  displayTitle = '';
  typingSpeed = 35;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      const prev = changes['title'].previousValue || this.displayTitle || '';
      const curr = changes['title'].currentValue;

      if (prev !== curr) {
        this.animateTitleChange(prev, curr);
      }
    }
  }

  private async animateTitleChange(oldTitle: string, newTitle: string) {
    for (let i = oldTitle.length; i >= 1; i--) {
      this.displayTitle = oldTitle.slice(0, i);
      await this.delay(this.typingSpeed);
    }
    for (let i = 1; i <= newTitle.length; i++) {
      this.displayTitle = newTitle.slice(0, i);
      await this.delay(this.typingSpeed);
    }
  }

  private delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }
}
