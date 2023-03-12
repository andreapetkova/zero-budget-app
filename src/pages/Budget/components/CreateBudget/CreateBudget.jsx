import { useQuery } from '@tanstack/react-query';
import { CategorySavingsTable, CategoryTable } from '../../../../components/CategoryTable';
import { budgetApi, queryKeys } from '../../../../services';
import styles from './CreateBudget.module.css';

export const CreateBudget = () => {
  const { data, isFetched } = useQuery({
    queryKey: queryKeys.getMonthlyBudget,
    queryFn: budgetApi.getMonthlyBudget,
  });

  return (
    <div className={styles['flex-grid']}>
      {isFetched && (
        <>
          <CategoryTable title={'needs'} items={data.needs} />
          <CategoryTable title={'wants'} items={data.wants} />
          <CategorySavingsTable
            title={'savings'}
            primaryItems={data.savings.primary}
            secondaryItems={data.savings.secondary}
          />
        </>
      )}
    </div>
  );
};
