import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class OrientationService implements OnDestroy {
  private readonly query = window.matchMedia('(orientation: portrait)');
  private readonly isPortraitSubject = new BehaviorSubject<boolean>(false);
  isPortrait$ = this.isPortraitSubject.asObservable();

  private readonly handleOrientation = (event: MediaQueryListEvent) =>
    this.isPortraitSubject.next(event.matches);

  constructor() {
    this.isPortraitSubject.next(this.query.matches);
    this.query.addEventListener('change', this.handleOrientation);
  }

  ngOnDestroy(): void {
    this.query.removeEventListener('change', this.handleOrientation);
  }
}
