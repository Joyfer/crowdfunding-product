interface dataCardsOutlined {
  name: string;
  description: string;
  lefts: number;
  pledgePrice: number;
}

const dataCardsOutlined: dataCardsOutlined[] = [
  {
    name: "Bamboo Stand",
    description: `You get an ergonomic stand made of natural bamboo. You've helped
      us launch our promotional campaign, and you’ll be added to a
      special Backer member list.`,
    lefts: 101,
    pledgePrice: 25,
  },
  {
    name: "Black Edition Stand",
    description: `You get a Black Special Edition computer stand and a personal thank you. 
      You’ll be added to our Backer member list. Shipping is included.`,
    lefts: 64,
    pledgePrice: 75,
  },
  {
    name: "Mahogany Special Edition",
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
      You’ll be added to our Backer member list. Shipping is included.`,
    lefts: 0,
    pledgePrice: 200,
  },
];

export default dataCardsOutlined;
