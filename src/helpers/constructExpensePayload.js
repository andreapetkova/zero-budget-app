export const constructExpensePayload = (amount, category) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const payload = { id: Math.random(), category, date: formattedDate, amount };

  return payload;
};
