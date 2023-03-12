export const constructPayload = ({ type, items }) => {
  let payload = {};

  switch (type) {
    case 'needs' || 'wants':
      for (var [key, value] of items.entries()) {
        payload[key] = { limit: +value, currentlySpent: 0 };
      }

      return payload;

    case 'savings':
      break;
    default:
      break;
  }
};
