import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/interfaces';
import { icons } from '../data/data';

@Component({
  selector: 'app-magic-card',
  standalone: true,
  imports: [],
  templateUrl: './magic-card.component.html',
  styleUrl: './magic-card.component.sass',
})
export class MagicCardComponent {
  @Input() card?: Card;
  @Input() index?: number;
  newText: string = '';
  newManaCost: string = '';
  newColorIdentity: string = '';

  ngOnInit() {
    this.newText = this.refactorText(this.card?.text || '');
    this.newManaCost = this.refactorText(this.card?.manaCost || '');
    const colorIdentityString =
      this.card?.colorIdentity != undefined
        ? this.card?.colorIdentity.join(' ')
        : '';
    this.newColorIdentity = this.refactorColorIdentity(
      colorIdentityString || ''
    );
    //console.log(this.index)

    let els = Array.from(
      document.getElementsByClassName(
        'magic-text__icons'
      ) as HTMLCollectionOf<HTMLElement>
    );

    for (const el of els) {
      el.setAttribute('style', 'vertical-align: text-bottom');
    }
  }
  refactorColorIdentity = (text: string) => {
    const replacedText = text.replace(
      /[A-Z]/g,
      (replaced) => `<img src=${icons[replaced]} />`
    );
    return replacedText;
  };

  refactorText = (text: string) => {
    const replacedIcons = text.replace(
      /\{(?:[1-4]|[A-Z])\}/g,
      (replaced) => `<img class="magic-text__icons" src=${icons[replaced]} />`
    );
    return replacedIcons;
  };
}
