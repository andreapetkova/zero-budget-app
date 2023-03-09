import { CategorySavingsTable } from '../../components/CategoryTable/CategorySavingsTable';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { Income } from '../../components/Income';
import { IncomeContextProvider } from '../../context/IncomeContext.context';
import { mockNeedsCategories } from '../../mock/mockNeedsCategories';
import {
  mockSavingsGeneralCategories,
  mockSavingsSecondaryCategories,
} from '../../mock/mockSavingsItems';
import { mockWantsCategories } from '../../mock/mockWantsCategories';
import styles from './Budget.module.css';

export const Budget = () => {
  return (
    <IncomeContextProvider>
      <Income />
      <div className={styles['flex-grid']}>
        <CategoryTable title={'needs'} items={mockNeedsCategories} />
        <CategoryTable title={'wants'} items={mockWantsCategories} />
        <CategorySavingsTable
          title={'savings'}
          generalItems={mockSavingsGeneralCategories}
          secondaryItems={mockSavingsSecondaryCategories}
        />
      </div>
    </IncomeContextProvider>
  );
};
