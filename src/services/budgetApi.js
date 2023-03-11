import axios from 'axios';

export const budgetApi = {
  getMonthlyBudget: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget.json',
    );

    return response.data;
  },
  postNeedsBudget: async payload => {
    const response = await axios.post(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/needs.json',
      payload,
    );

    return response.data;
  },
  postWantsBudget: async payload => {
    const response = await axios.post(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/wants.json',
      payload,
    );

    return response.data;
  },
  postSavingsBudget: async payload => {
    const response = await axios.post(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/wants.json',
      payload,
    );

    return response.data;
  },
  getExpenses: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    );

    return response.data;
  },
  postExpense: async payload => {
    const response = await axios.post(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
      payload,
    );

    return response.data;
  },
};
