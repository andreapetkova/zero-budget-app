export const constructBudgetPayload = items => {
  let payload = {};

  for (var [key, value] of items.entries()) {
    payload[key] = { limit: +value, currentlySpent: 0 };
  }

  return payload;
};
