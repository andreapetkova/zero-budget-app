import { useQuery } from '@tanstack/react-query';
import { CategorySavingsForm, CategoryForm } from '../../../../components/CategoryForm';
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
          <CategoryForm title={'needs'} items={data.needs} />
          <CategoryForm title={'wants'} items={data.wants} />
          <CategorySavingsForm
            title={'savings'}
            primaryItems={data.savings.primary}
            secondaryItems={data.savings.secondary}
          />
        </>
      )}
    </div>
  );
};
