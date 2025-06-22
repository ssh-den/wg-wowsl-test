import { Component } from '@angular/core';
import { ButtonComponent } from "../../ui/button/button.component";
import { SharedModule } from '../../shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-layout-screen',
  imports: [ButtonComponent,
    SharedModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './select-layout-screen.component.html',
  styleUrl: './select-layout-screen.component.scss'
})
export class SelectLayoutScreenComponent {

}
