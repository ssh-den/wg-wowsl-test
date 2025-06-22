import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileScreenComponent } from './mobile-screen/mobile-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { mobileRoutes } from './mobile.routes';
import { LoadingScreenComponent } from '../../shared/screens/loading-screen/loading-screen.component';
import { RotateDeviceScreenComponent } from '../../shared/screens/rotate-device-screen/rotate-device-screen.component';



@NgModule({
  declarations: [MobileScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mobileRoutes),
    LoadingScreenComponent,
    RotateDeviceScreenComponent
  ]
})
export class MobileModule { }
