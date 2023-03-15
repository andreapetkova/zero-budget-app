import styles from './IncomeForm.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

import { InputField } from '../../InputField';
import { useBudgetContext, useIncomeContext } from '../../../context';
import { Chip } from '../../Chip/Chip';

export const IncomeForm = () => {
  const { amountLeft, handleSetAmountLeft } = useIncomeContext();
  const { handleOpenBudget } = useBudgetContext();

  const [salary, setSalary] = useState('');
  const [extraIncome, setExtraIncome] = useState('');
  const [totalIncome, setTotalIncome] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    const form = document.querySelector('#incomeForm');
    const total = salary + extraIncome;

    setTotalIncome(total);
    handleSetAmountLeft(null, total);
    handleOpenBudget();
    setSubmitted(true);

    form.reset();
  };

  return (
    <form className={styles.form} id='incomeForm' autoComplete='off'>
      {!submitted && (
        <>
          <InputField
            title={'salary'}
            value={salary}
            onChange={e => setSalary(Number(e.target.value))}
          />
          <AiOutlinePlus className={styles.icon} />
          <InputField
            title={'extra income'}
            value={extraIncome}
            onChange={e => setExtraIncome(Number(e.target.value))}
          />

          <button disabled={totalIncome} className={styles['submit-button']} onClick={onSubmit}>
            Create Budget
          </button>
        </>
      )}

      {totalIncome && (
        <div style={{ display: 'flex', gap: '20px' }}>
          <Chip title={'total'} type={'total'} value={totalIncome} />
          <Chip title={'income left'} type={'incomeLeft'} value={amountLeft} />
        </div>
      )}
    </form>
  );
};
