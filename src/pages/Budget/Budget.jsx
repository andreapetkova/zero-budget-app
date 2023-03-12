import { Income } from '../../components/Income';
import { IncomeContextProvider, useBudgetContext } from '../../context';
import { CreateBudget } from './components/CreateBudget/CreateBudget';

export const Budget = () => {
  const { openBudget } = useBudgetContext();

  return (
    <IncomeContextProvider>
      <Income />
      {openBudget && <CreateBudget />}
    </IncomeContextProvider>
  );
};
