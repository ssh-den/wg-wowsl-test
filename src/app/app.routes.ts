import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/screens/select-layout-screen/select-layout-screen.component').then(m => m.SelectLayoutScreenComponent),
    pathMatch: 'full'
  },
  {
    path: 'desktop',
    loadChildren: () =>
      import('./features/desktop/desktop.module').then(m => m.DesktopModule)
  },
  {
    path: 'mobile',
    loadChildren: () =>
      import('./features/mobile/mobile.module').then(m => m.MobileModule)
  }
];
