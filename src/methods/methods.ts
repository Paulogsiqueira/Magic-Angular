import axios from 'axios';
import { Card } from '../interfaces/interfaces';

export const getCards = async (block: string,amount: number ) => {
  try {
    const req = await axios.get(
      `https://api.magicthegathering.io/v1/sets/${block}/booster`
    );

    const requests = [];
    for (let i = 0; i < amount; i++) {
      requests.push(req);
    }
    let cards: Card[] = [];
    const response = await axios.all(requests);
    for (let i = 0; i < response.length; i++) {
      response[i].data.cards.forEach((element: Card) => {
        if (element.types.includes('Creature')) {
          cards.push(element);
        }
      });
    }
    return cards;
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    throw error;
  }
};

export const getBoosters = async (nome: string, bloco: string) => {
  try {
    const response = await axios.get(
      `https://api.magicthegathering.io/v1/sets?name=${nome}&block=${bloco}`
    );
    const boosters = response.data.sets;
    return boosters;
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    throw error;
  }
};
