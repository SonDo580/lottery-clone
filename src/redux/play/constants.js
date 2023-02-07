const numbers = [1, 3, 5, 10, 15]; // number of tickets
const price = numbers.map((number) => number * 5); // in dollars
const discount = [0, 3, 5, 7, 10]; // in percentages

export const ticketConstants = {
  numbers,
  price,
  discount,
};
