import { createSelector } from "@reduxjs/toolkit";
import { ticketConstants } from "./constants";

export const ticketsSelector = (state) => state.play;

export const numTicketsSelector = createSelector(
  ticketsSelector,
  (tickets) => tickets.length
);

const indexSelector = createSelector(numTicketsSelector, (numTickets) => {
  return ticketConstants.numbers.findIndex((number) => number === numTickets);
});

export const priceSelector = createSelector(
  indexSelector,
  (index) => ticketConstants.price[index]
);

export const discountSelector = createSelector(
  indexSelector,
  priceSelector,
  (index, price) => (price * ticketConstants.discount[index]) / 100
);

export const totalSelector = createSelector(
  priceSelector,
  discountSelector,
  (price, discount) => price - discount
);
