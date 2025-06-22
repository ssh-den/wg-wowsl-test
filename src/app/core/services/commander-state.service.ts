import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commander } from '../../models/commander.model';
import { User } from '../../models/user.model';
import { CommanderListItem } from '../../models/commander-list-item.model';
import { CommanderDataService } from './commander-data.service';
import { UserDataService } from './user-data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommanderStateService {

  private commanderSubject = new BehaviorSubject<Commander | null>(null);
  private userSubject = new BehaviorSubject<User | null>(null);
  private selectedItemSubject = new BehaviorSubject<CommanderListItem | null>(null);
  private appliedGuiseIdSubject = new BehaviorSubject<number | null>(null);

  constructor(
    private commanderData: CommanderDataService,
    private userData: UserDataService
  ) {
    this.init();
  }

  private init() {
    this.commanderData.getCommander().subscribe(commander => {
      // console.log('[State] Loaded commander:', commander);
      this.commanderSubject.next(commander);

      const defaultItem: CommanderListItem = {
        id: commander.id,
        title: commander.title,
        avatarUrl: commander.avatarUrl,
        miniAvatarUrl: commander.miniAvatarUrl,
        availableStock: commander.availableStock,
        stock: commander.stock,
        type: 'COMMANDER',
        isLegendary: commander.isLegendary,
        rank: commander.rank
      };

      this.selectedItemSubject.next(defaultItem);
      // console.log('[State] Default selected:', defaultItem);
    });

    this.userData.getUser().subscribe(user => {
      // console.log('[State] Loaded user:', user);
      this.userSubject.next(user);
    });
  }

  getCommander$(): Observable<Commander | null> {
    return this.commanderSubject.asObservable();
  }

  getUser$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  getSelectedItem$(): Observable<CommanderListItem | null> {
    return this.selectedItemSubject.asObservable();
  }

  getAppliedGuiseId$(): Observable<number | null> {
    return this.appliedGuiseIdSubject.asObservable();
  }

  getCommanderListItems$(): Observable<CommanderListItem[]> {
    return this.commanderSubject.pipe(
      map(commander => {
        if (!commander) return [];

        const commanderItem: CommanderListItem = {
          id: commander.id,
          title: commander.title,
          avatarUrl: commander.avatarUrl,
          miniAvatarUrl: commander.miniAvatarUrl,
          availableStock: commander.availableStock,
          stock: commander.stock,
          type: 'COMMANDER',
          isLegendary: commander.isLegendary,
          rank: commander.rank
        };

        const guiseItems: CommanderListItem[] = commander.guises.map(g => ({
          id: g.id,
          title: g.title,
          avatarUrl: g.avatarUrl,
          miniAvatarUrl: g.miniAvatarUrl,
          availableStock: g.availableStock,
          stock: g.stock,
          type: g.type,
          guiseEffects: g.guiseEffects
        }));

        return [commanderItem, ...guiseItems];
      })
    );
  }

  selectItem(item: CommanderListItem) {
    const current = this.selectedItemSubject.value;

    if (current?.id === item.id) {
      // console.log('[State] Ignored re-selection:', item.id);
      return;
    }

    // console.log('[State] Selected item:', item);
    this.selectedItemSubject.next(item);
  }

  resetToCommander() {
    const commander = this.commanderSubject.value;
    if (!commander) return;

    const item: CommanderListItem = {
      id: commander.id,
      title: commander.title,
      avatarUrl: commander.avatarUrl,
      miniAvatarUrl: commander.miniAvatarUrl,
      availableStock: commander.availableStock,
      stock: commander.stock,
      type: 'COMMANDER',
      isLegendary: commander.isLegendary,
      rank: commander.rank
    };

    this.selectedItemSubject.next(item);
  }

  applyGuise(id: number | null) {
    // console.log('[State] Applied guise ID:', id);
    this.appliedGuiseIdSubject.next(id);
  }
}