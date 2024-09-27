export interface numberItems {
  leftArea: { number: string; pretext: string };
  rightArea: string;
}
export interface successStories {
  tittle: string;
  subtitle: string;
  numbers: [numberItems, numberItems];
  textCard: { image: string; subtitle: string; name: string; text: string };
  link: string;
}
