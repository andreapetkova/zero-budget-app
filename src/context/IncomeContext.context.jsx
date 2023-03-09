import { createContext, useContext, useState } from 'react';

const IncomeContext = createContext({
  amountLeft: 0,
  handleSetAmountLeft: () => undefined,
});

export const IncomeContextProvider = ({ children }) => {
  const [amountLeft, setAmountLeft] = useState(null);

  const handleSetAmountLeft = amount => {
    setAmountLeft(amount);
  };
  return (
    <IncomeContext.Provider value={{ amountLeft, handleSetAmountLeft }}>
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
