interface Deck {
  actionCards: ActionCard[];
}

interface ActionCard {
  color: string;
  action: string;
  value: number;
  description: string;
}
