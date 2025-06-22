import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { CommanderAvatarMaxComponent } from './components/commander-avatar-max/commander-avatar-max.component';
import { CommanderListComponent } from './components/commander-list/commander-list.component';
import { CommanderDetailsComponent } from './components/commander-details/commander-details.component';
import { CommanderAvatarMiniComponent } from './components/commander-avatar-mini/commander-avatar-mini.component';
import { IconBadgeComponent } from "./ui/icon-badge/icon-badge.component";
import { ButtonComponent } from "./ui/button/button.component";
import { CommanderTitleComponent } from './ui/commander-title/commander-title.component';
import { SectionTitleComponent } from './ui/section-title/section-title.component';
import { CommanderDetailsPanelComponent } from './components/commander-details-panel/commander-details-panel.component';
import { CommanderBioPanelComponent } from './components/commander-bio-panel/commander-bio-panel.component';
import { GuiseDetailsPanelComponent } from './components/guise-details-panel/guise-details-panel.component';
import { GuiseBioPanelComponent } from './components/guise-bio-panel/guise-bio-panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CommanderAvatarMaxComponent,
    CommanderListComponent,
    CommanderDetailsComponent,
    CommanderAvatarMiniComponent
  ],
  imports: [
    CommonModule,
    ShortNumberPipe,
    IconBadgeComponent,
    ButtonComponent,
    CommanderTitleComponent,
    SectionTitleComponent,
    CommanderDetailsPanelComponent,
    CommanderBioPanelComponent,
    GuiseDetailsPanelComponent,
    GuiseBioPanelComponent
],
  exports: [
    HeaderComponent,
    CommanderAvatarMaxComponent,
    CommanderListComponent,
    CommanderDetailsComponent,
    CommanderAvatarMiniComponent,
    IconBadgeComponent,
    ButtonComponent,
    CommanderTitleComponent,
    SectionTitleComponent,
    CommanderDetailsPanelComponent,
    CommanderBioPanelComponent,
    GuiseDetailsPanelComponent,
    GuiseBioPanelComponent
  ]
})
export class SharedModule { }
