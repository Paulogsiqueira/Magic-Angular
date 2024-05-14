import { Component } from '@angular/core';
import { MagicFormComponent } from '../magic-form/magic-form.component';
import { MagicBoosterComponent } from '../magic-booster/magic-booster.component';
import { CommonModule } from '@angular/common';

export interface Booster {
  name: string;
  block: string;
  releaseDate: string;
}

@Component({
  selector: 'app-magic-dashboard',
  standalone: true,
  imports: [MagicFormComponent, MagicBoosterComponent,CommonModule],
  templateUrl: './magic-dashboard.component.html',
  styleUrl: './magic-dashboard.component.sass',
})
export class MagicDashboardComponent {
  boosterList: Booster[] = [];

  formSubmit = async (list: Booster[]) => {
    this.boosterList = list;
  };
}
