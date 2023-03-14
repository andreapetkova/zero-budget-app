import styles from './AddExpense.module.css';

import { useState } from 'react';
import { InputField } from '../InputField';
import { budgetApi } from '../../services/budgetApi';
import { MenuItem, Select } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../services';
import { constructExpensePayload } from '../../helpers';
import { useMutateHistory } from '../../hooks';

export const AddExpense = () => {
  const [newExpense, setNewExpense] = useState('');
  const [category, setCategory] = useState('');

  const { data, isFetched } = useQuery({
    queryKey: queryKeys.getMonthlyBudget,
    queryFn: budgetApi.getMonthlyBudget,
  });

  const { mutateExpenses } = useMutateHistory();

  const onSubmit = event => {
    event.preventDefault();

    const payload = constructExpensePayload(newExpense, category);
    mutateExpenses.mutate(payload);

    setNewExpense('');
    setCategory('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Expense</h2>
      <form className={styles.form} id='addNewExpenseForm' autoComplete='off'>
        <InputField
          title={'Amount'}
          value={newExpense}
          onChange={e => setNewExpense(Number(e.target.value))}
        />
        <div className={styles['select-container']}>
          <label>Category</label>
          <Select
            sx={{
              height: '40px',
              width: '200px',
              border: '1px solid var(--color-lavenderGrey)',
              borderRadius: '30px',
            }}
            id='category-select'
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {isFetched &&
              Object.keys({ ...data.needs, ...data.wants }).map(category => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
          </Select>
        </div>
        <button className={styles['submit-button']} onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};
