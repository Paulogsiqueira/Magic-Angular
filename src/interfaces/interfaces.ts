export interface Booster {
  name: string;
  block: string;
  releaseDate: string;
  code: string;
}

export interface Card {
  colorIdentity: string[];
  name: string;
  manaCost: string;
  text: string;
  imageUrl: string;
  types: string[];
}
