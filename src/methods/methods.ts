import axios from 'axios';
import { Card } from '../interfaces/interfaces';

export const getCards = async (block: string) => {
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
