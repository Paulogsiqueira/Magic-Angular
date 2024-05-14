import { Component, Input } from '@angular/core';
import { Booster } from '../magic-dashboard/magic-dashboard.component';

@Component({
  selector: 'app-magic-booster',
  standalone: true,
  imports: [],
  templateUrl: './magic-booster.component.html',
  styleUrl: './magic-booster.component.sass'
})
export class MagicBoosterComponent {
  @Input() booster?: Booster
  
}
