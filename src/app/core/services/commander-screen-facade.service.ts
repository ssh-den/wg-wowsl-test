import { Injectable } from "@angular/core";
import { CommanderStateService } from "./commander-state.service";
import { CommanderListItem } from "../../models/commander-list-item.model";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class CommanderScreenFacadeService {
  readonly items$;
  readonly selectedItem$;
  readonly appliedGuiseId$;
  readonly commander$;
  readonly user$;
  readonly avatarUrls$;

  constructor(private state: CommanderStateService) {
    this.items$ = this.state.getCommanderListItems$();
    this.selectedItem$ = this.state.getSelectedItem$();
    this.appliedGuiseId$ = this.state.getAppliedGuiseId$();
    this.commander$ = this.state.getCommander$();
    this.user$ = this.state.getUser$();

    this.avatarUrls$ = this.items$.pipe(
      map(items => items.map(i => i.avatarUrl).filter(Boolean) as string[])
    );
  }

  selectItem(item: CommanderListItem) {
    this.state.selectItem(item);
  }

  applyGuise(id: number) {
    this.state.applyGuise(id);
  }

  resetToCommander() {
    this.state.resetToCommander();
    this.state.applyGuise(null);
  }
}