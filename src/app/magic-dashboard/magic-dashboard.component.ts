import { Component } from '@angular/core';
import { MagicFormComponent } from '../magic-form/magic-form.component';
import { MagicBoosterComponent } from '../magic-booster/magic-booster.component';
import { CommonModule } from '@angular/common';
import { MagicCardComponent } from '../magic-card/magic-card.component';
import { Booster, Card } from '../../interfaces/interfaces';
import { MagicLoadingComponent } from '../magic-loading/magic-loading.component';
import { getBoosters, getCards } from '../../methods/methods';
import { DeleteButtonComponent } from '../buttons/delete-button/delete-button.component';

@Component({
  selector: 'app-magic-dashboard',
  standalone: true,
  imports: [
    MagicFormComponent,
    MagicBoosterComponent,
    CommonModule,
    MagicCardComponent,
    MagicLoadingComponent,
    DeleteButtonComponent,
  ],
  templateUrl: './magic-dashboard.component.html',
  styleUrl: './magic-dashboard.component.sass',
})
export class MagicDashboardComponent {
  boosterList: Booster[] = [];
  cardList: Card[] = [];
  loading: boolean = false;
  cardsSelected: number[] = [];
  block: string = '';
  numberOfDeletedCards: number = 0;

  boosterSelected = async (block: string) => {
    this.block = block;
    this.loading = true;
    this.boosterList = [];
    let cards = await getCards(block, 4);
    if (cards.length > 30) {
      cards.splice(30);
    }
    this.cardList = cards;
    if (cards.length < 30) {
      const newCards = await getCards(block, 3);
      cards = [...cards, ...newCards];
      if (cards.length > 30) {
        cards.splice(30);
      }
    }
    this.cardList = cards;
    this.loading = false;
  };

  formSubmit = async (nameBlock: string[]) => {
    this.numberOfDeletedCards = 0
    this.cardList = [];
    this.boosterList = await getBoosters(nameBlock[0], nameBlock[1]);
  };

  cardSelected = (index: number) => {
    if (this.cardsSelected.includes(index)) {
      this.cardsSelected.splice(this.cardsSelected.indexOf(index), 1);
    } else {
      this.cardsSelected.push(index);
    }
  };

  deleteSelectedCards = async () => {
    this.numberOfDeletedCards += this.cardsSelected.length;
    let newCardList = this.cardList.filter(
      (value, index) => !this.cardsSelected.includes(index)
    );
    this.cardsSelected = [];
    this.cardList = [];
    this.loading = true;
    const newCards = await getCards(this.block, 2);
    newCards.forEach((value) => {
      newCardList.push(value);
    });
    if (newCardList.length > 30) {
      newCardList.splice(30);
    }
    this.loading = false;
    this.cardList = newCardList;
  };
}
