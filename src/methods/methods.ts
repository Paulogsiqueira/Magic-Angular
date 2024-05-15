import axios from 'axios';
import { Booster, Card } from '../interfaces/interfaces';

export const getCards = async (block: string, amount: number) => {
  try {
    let cards: Card[] = [];
    const requests = []
    for(let i = 0; i < amount; i++) {
      requests.push(
        axios.get(`https://api.magicthegathering.io/v1/sets/${block}/booster?${i}`)
      )
    }

    const response = await axios.all(requests);
    for (let i = 0; i < response.length; i++) {
      response[i].data.cards.forEach((card: Card) => {
        if (card.types.includes('Creature')) {
          cards.push(card);
        }
      });
    }
    return cards;
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    throw error;
  }
};

// export const getCards = async (block: string, amount: number) => {
//   try {
//     let cards: Card[] = [];
//     while( cards.length < amount){
//       const response = await axios.get(`https://api.magicthegathering.io/v1/sets/${block}/booster`);
//       response.data.cards.forEach((card: Card) => {
//         if(card.types.includes("Creature")){
//           cards.push(card);
//         }
//       })
//     }
//     return cards;
//   } catch (error) {
//     console.error('Erro ao processar a solicitação:', error);
//     throw error;
//   }
// };

export const getBoosters = async (nome: string, bloco: string) => {
  try {
    const response = await axios.get(
      `https://api.magicthegathering.io/v1/sets?name=${nome}&block=${bloco}`
    );
    let boosters: Booster[] = [];
    const sets = response.data.sets;
    console.log(sets);
    sets.forEach((set: Booster) => {
      if (/^[A-Za-z]{3}$/.test(set.code)) {
        boosters.push(set);
      }
    });
    return boosters;
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    throw error;
  }
};
