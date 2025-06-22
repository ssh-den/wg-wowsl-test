import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopScreenComponent } from './desktop-screen/desktop-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { desktopRoutes } from './desktop.routes';
import { LoadingScreenComponent } from '../../shared/screens/loading-screen/loading-screen.component';
import { RotateDeviceScreenComponent } from '../../shared/screens/rotate-device-screen/rotate-device-screen.component';



@NgModule({
  declarations: [DesktopScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(desktopRoutes),
    LoadingScreenComponent,
    RotateDeviceScreenComponent
  ]
})
export class DesktopModule { }
