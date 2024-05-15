import { Component } from '@angular/core';
import { MagicFormComponent } from '../magic-form/magic-form.component';
import { MagicBoosterComponent} from '../magic-booster/magic-booster.component';
import { CommonModule } from '@angular/common';
import { MagicCardComponent } from '../magic-card/magic-card.component';
import axios from 'axios';
import { Booster, Card } from '../../interfaces/interfaces';
import { MagicLoadingComponent } from '../magic-loading/magic-loading.component';

@Component({
  selector: 'app-magic-dashboard',
  standalone: true,
  imports: [MagicFormComponent, MagicBoosterComponent,CommonModule,MagicCardComponent,MagicLoadingComponent],
  templateUrl: './magic-dashboard.component.html',
  styleUrl: './magic-dashboard.component.sass',
})
export class MagicDashboardComponent {
  boosterList: Booster[] = [];
  cardList: Card[] = [];
  loading: boolean = false;

  boosterSelected = async (block: string) =>{
    this.loading = true;
    this.boosterList = []
    while (this.cardList.length < 30) {
      const cards = await this.getCards(block);
      cards.forEach((card) => {
        this.cardList.push(card);
        if(this.loading == true){
          this.loading = false
        }
      });
    }
    if (this.cardList.length > 30) {
      this.cardList.splice(30);
    }
  }

  formSubmit = async (nameBlock: string[]) => {
    this.cardList = []
    this.boosterList = await this.getBoosters(nameBlock[0],nameBlock[1])
  };

  getCards = async (block: string) => {
    try {
      const response = await axios.get(
        `https://api.magicthegathering.io/v1/sets/${block}/booster`
      );
      const boosters = response.data.cards;
      let cards: Card[] = [];
      boosters.map((card: Card) => {
        if (card.types.includes('Creature')) {
          cards.push(card);
        }
      });
      return cards;
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
      throw error;
    }
  };

  getBoosters = async (nome: string, bloco: string) => {
    try {
      const response = await axios.get(`https://api.magicthegathering.io/v1/sets?name=${nome}&block=${bloco}`);
      const boosters = response.data.sets
      return boosters
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
      throw error;
    }
  }
}
