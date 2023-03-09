import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { Income } from '../../components/Income';
import { IncomeContextProvider } from '../../context/IncomeContext.context';
import { mockNeedsCategories } from '../../mock/mockNeedsCategories';
import { mockWantsCategories } from '../../mock/mockWantsCategories';
import styles from './Budget.module.css';

export const Budget = () => {
  return (
    <IncomeContextProvider>
      <Income />
      <div className={styles['flex-grid']}>
        <CategoryTable title={'needs'} items={mockNeedsCategories} />
        <CategoryTable title={'wants'} items={mockWantsCategories} />
      </div>
    </IncomeContextProvider>
  );
};
