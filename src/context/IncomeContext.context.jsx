import { createContext, useContext, useState } from 'react';

const BudgetContext = createContext({
  openBudget: false,
  handleOpenBudget: () => undefined,
  handleCloseBudget: () => undefined,
});

export const BudgetContextProvider = ({ children }) => {
  const [openBudget, setOpenBudget] = useState(false);

  const handleOpenBudget = () => {
    setOpenBudget(true);
  };

  const handleCloseBudget = () => {
    setOpenBudget(false);
  };

  return (
    <BudgetContext.Provider
      value={{
        openBudget,
        handleOpenBudget,
        handleCloseBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetContext = () => {
  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error('useBudgetContext must be used within BudgetContextProvider');
  }

  return context;
};
