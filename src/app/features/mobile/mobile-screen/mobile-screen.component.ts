import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { CommanderListItem } from '../../../models/commander-list-item.model';
import { Commander } from '../../../models/commander.model';
import { User } from '../../../models/user.model';
import { CommanderScreenFacadeService } from '../../../core/services/commander-screen-facade.service';
import { AvatarPreloaderService } from '../../../core/services/avatar-preloader.service';
import { COMMANDER_RESOURCES } from '../../../shared/constants/resources.constant';
import { OrientationService } from '../../../core/services/orientation.service';

@Component({
  selector: 'app-mobile-screen',
  standalone: false,
  templateUrl: './mobile-screen.component.html',
  styleUrl: './mobile-screen.component.scss'
})

export class MobileScreenComponent {
  loaded = false;

  user$: Observable<User | null>;
  commander$: Observable<Commander | null>;
  items$: Observable<CommanderListItem[]>;
  selectedItem$: Observable<CommanderListItem | null>;
  appliedGuiseId$: Observable<number | null>;
  avatarUrls$: Observable<string[]>;
  isPortrait$: Observable<boolean>;

  readonly resources = COMMANDER_RESOURCES;

  constructor(
    private facade: CommanderScreenFacadeService,
    private preloader: AvatarPreloaderService,
    private orientation: OrientationService
  ) {
    this.user$ = this.facade.user$;
    this.commander$ = this.facade.commander$;
    this.items$ = this.facade.items$;
    this.selectedItem$ = this.facade.selectedItem$;
    this.appliedGuiseId$ = this.facade.appliedGuiseId$;
    this.avatarUrls$ = this.facade.avatarUrls$;
    this.isPortrait$ = this.orientation.isPortrait$;
  }

  async ngAfterViewInit() {
    const urls = await firstValueFrom(this.avatarUrls$);
    await Promise.all([
      this.preloader.preload(urls),
      new Promise(res => setTimeout(res, 1000))
    ]);
    this.loaded = true;
  }

  onItemSelected(item: CommanderListItem) {
    this.facade.selectItem(item);
  }

  onApplyGuise(id: number) {
    this.facade.applyGuise(id);
  }

  onResetToCommander() {
    this.facade.resetToCommander();
  }
}