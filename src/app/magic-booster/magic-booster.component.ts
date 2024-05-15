import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booster } from '../../interfaces/interfaces';


@Component({
  selector: 'app-magic-booster',
  standalone: true,
  imports: [],
  templateUrl: './magic-booster.component.html',
  styleUrl: './magic-booster.component.sass',
})
export class MagicBoosterComponent {
  @Input() booster?: Booster;
  @Output()
  boosterSelected = new EventEmitter<string>();

  boosterChoiced = (code: string) => {
    this.boosterSelected.emit(code)
  }
}
