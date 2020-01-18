/*
28 Monopoly Deal Property Cards
There are a total of 28 property cards in the Monopoly Deal Deck, 
10 different colored property sets and include: 
Green Set, 
Dark Blue Set, 
Light Blue Set, 
Red Set, 
Utility Set, 
Yellow Set, 
Orange Set, 
Brown Set, 
Purple Set, 
and Railroad Set.
*/
export const propertySets = {
  green: {
    color: 'green',
    value: 4,
    properties: [
      'North Carolina Avenue',
      'Pacific Avenue',
      'Pennsylvania Avenue',
    ],
    rents: [],
  },
  darkBlue: {
    color: 'darkblue',
    value: 4,
    properties: ['Boardwalk', 'Park Place'],
    rents: [],
  },
  lightBlue: {
    color: 'lightblue',
    value: 1,
    properties: ['Connecticut Avenue', 'Oriental Avenue', 'Vermont Avenue'],
    rents: [],
  },
  red: {
    color: 'red',
    value: 3,
    properties: ['Kentucky Avenue', 'Inidiana Avenue', 'Illinois Avenue'],
    rents: [],
  },
  utility: {
    color: 'lightGreen',
    value: 2,
    properties: ['Water Works', 'Electric Company'],
    rents: [],
  },
  yellow: {
    color: 'yellow',
    value: 3,
    properties: ['Ventnor Avenue', 'Marvin Gardens', 'Atlantic Avenue'],
    rents: [],
  },
  orange: {
    color: 'orange',
    value: 2,
    properties: ['New York Avenue', 'ST. James Place', 'Tennessee Avenue'],
    rents: [],
  },
  brown: {
    color: 'brown',
    value: 1,
    properties: ['Baltic Avenue', 'Mediterranean Avenue'],
    rents: [],
  },
  purple: {
    color: 'purple',
    value: 2,
    properties: ['ST. Charles Place', 'Virginia Avenue', 'States Avenue'],
    rents: [],
  },
  railroad: {
    color: 'grey',
    value: 2,
    properties: [
      'Short Line',
      'B. & O. Railroad',
      'Reading Railroad',
      'Pennsylvania Railroad',
    ],
    rents: [],
  },
};

/* Action Cards
2 Deal Breaker, 
3 Just Say No, 
3 Sly Deal , 
4 Force Deal, 
3 Debt Collector, 
3 It’s My Birthday, 
10 Pass Go, 
3 House, 
3 Hotel, 
and 2 Double The Rent Cards
*/
export const actionCards = {
  dealBreaker: { quantity: 2, value: 5 },
  justSayNo: { quantity: 3, value: 4 },
  slyDeal: { quantity: 3, value: 3 },
  forcedDeal: { quantity: 4, value: 3 },
  debtCollector: { quantity: 3, value: 3 },
  itsMyBirthday: { quantity: 3, value: 2 },
  passGo: { quantity: 10, value: 1 },
  house: { quantity: 3, value: 3 },
  hotel: { quantity: 3, value: 4 },
  doubleTheRent: { quantity: 2, value: 1 },
};
