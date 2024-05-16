import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../interfaces/interfaces';
import { icons } from '../data/data';

@Component({
  selector: 'app-magic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magic-card.component.html',
  styleUrl: './magic-card.component.sass',
})
export class MagicCardComponent {
  @Input() card?: Card;
  @Input() index?: number;
  @Input() cardsSelected: number[] = [];
  @Input() numberOfDeletedCards: number = 0;
  @Output()
  selectCardEvent = new EventEmitter<number>();
  newText: string = '';
  newManaCost: string = '';
  newColorIdentity: string = '';
  cardSelected: boolean = false;

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

  selectCard = () =>{
    if(this.cardsSelected.length + this.numberOfDeletedCards < 5){
      this.cardSelected = !this.cardSelected;
      this.selectCardEvent.emit(this.index)
    }else if(this.cardsSelected.length + this.numberOfDeletedCards == 5 && this.cardSelected == true){
      this.cardSelected = false
      this.selectCardEvent.emit(this.index)
    }
  }
}
