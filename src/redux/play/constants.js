const numbers = [1, 3, 5, 10, 15]; // number of tickets
const price = numbers.map((number) => number * 5); // in dollars
const discount = [0, 3, 5, 7, 10]; // in percentages

const table = {
  table1: {
    numsInTable: 50,
    maxSelect: 5,
  },
  table2: {
    numsInTable: 12,
    maxSelect: 2,
  },
};

export const ticketConstants = {
  numbers,
  price,
  discount,
  table,
};
