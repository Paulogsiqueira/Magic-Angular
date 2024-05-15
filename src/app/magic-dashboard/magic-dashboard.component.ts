import { Component } from '@angular/core';
import { MagicFormComponent } from '../magic-form/magic-form.component';
import { MagicBoosterComponent} from '../magic-booster/magic-booster.component';
import { CommonModule } from '@angular/common';
import { MagicCardComponent } from '../magic-card/magic-card.component';
import { Booster, Card } from '../../interfaces/interfaces';
import { MagicLoadingComponent } from '../magic-loading/magic-loading.component';
import { getBoosters, getCards } from '../../methods/methods';

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

  boosterSelected = async (block: string) => {
    this.loading = true;
    this.boosterList = [];
    this.cardList = [];
  
    const promises = Array.from({ length: 5 }, () => getCards(block));
  
    try {
      const responses = await Promise.all(promises);
  
      responses.forEach((cards) => {
        cards.forEach((card) => {
          this.cardList.push(card);
        });
      });
  
      if (this.cardList.length > 30) {
        this.cardList.splice(30);
      }
  
      this.loading = false;
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
      this.loading = false;
    }
  };

  formSubmit = async (nameBlock: string[]) => {
    this.cardList = []
    this.boosterList = await getBoosters(nameBlock[0],nameBlock[1])
  };
}
