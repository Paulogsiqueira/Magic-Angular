import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/interfaces';

@Component({
  selector: 'app-magic-card',
  standalone: true,
  imports: [],
  templateUrl: './magic-card.component.html',
  styleUrl: './magic-card.component.sass',
})
export class MagicCardComponent {
  @Input() card?: Card;
  icons: { [key: string]: string } = {
    B: '/icons/B.png',
    G: '/icons/G.png',
    R: '/icons/R.png',
    U: '/icons/U.png',
    W: '/icons/W.png',
  };

}
