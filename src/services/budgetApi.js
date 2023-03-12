import axios from 'axios';

export const budgetApi = {
  getMonthlyBudget: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget.json',
    );

    return response.data;
  },
  getNeedsBudget: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/needs.json',
    );

    return response.data;
  },
  putNeedsBudget: async payload => {
    const response = await axios.put(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/needs.json',
      payload,
    );

    return response.data;
  },
  getWantsBudget: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/wants.json',
    );

    return response.data;
  },
  putWantsBudget: async payload => {
    const response = await axios.put(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/wants.json',
      payload,
    );

    return response.data;
  },
  getSavingsBudget: async () => {
    const response = await axios.get(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/savings.json',
    );

    return response.data;
  },
  putSavingsBudget: async payload => {
    const response = await axios.put(
      'https://zero-budget-app-default-rtdb.europe-west1.firebasedatabase.app/budget/savings.json',
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
