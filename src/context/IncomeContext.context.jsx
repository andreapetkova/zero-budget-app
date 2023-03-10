import { createContext, useContext, useState } from 'react';

const IncomeContext = createContext({
  amountLeft: null,
  openBudget: false,
  handleSetOpenBudget: () => undefined,
  handleSetAmountLeft: () => undefined,
});

export const IncomeContextProvider = ({ children }) => {
  const [amountLeft, setAmountLeft] = useState(null);
  const [openBudget, setOpenBudget] = useState(false);

  const handleSetAmountLeft = (amount, initialAmount) => {
    if (initialAmount) {
      setAmountLeft(initialAmount);
      return;
    }
    if (amountLeft - amount < 0) {
      throw new Error('Amount left cannot be less than 0!');
    } else {
      setAmountLeft(prevAmount => prevAmount - amount);
    }
  };

  const handleSetOpenBudget = () => {
    setOpenBudget(true);
  };

  return (
    <IncomeContext.Provider
      value={{ amountLeft, handleSetAmountLeft, openBudget, handleSetOpenBudget }}
    >
      {children}
    </IncomeContext.Provider>
  );
};

export const useIncomeContext = () => {
  const context = useContext(IncomeContext);

  if (!context) {
    throw new Error('useIncomeContext must be used within IncomeContextProvider');
  }

  return context;
};
