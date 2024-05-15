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

  boosterSelected = async (block: string) =>{
    this.loading = true;
    this.boosterList = []
    const cards = await getCards(block,6)
    if(cards.length >30){
      cards.splice(30)
    }
    this.cardList = cards
  }

  formSubmit = async (nameBlock: string[]) => {
    this.cardList = []
    this.boosterList = await getBoosters(nameBlock[0],nameBlock[1])
  };
}
