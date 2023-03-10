import styles from './IncomeForm.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { IncomeLeftInputField, InputField } from '../InputField';
import { useIncomeContext } from '../../../context/IncomeContext.context';

export const IncomeForm = ({ createBudget }) => {
  const { amountLeft, handleSetAmountLeft } = useIncomeContext();

  const [totalIncome, setTotalIncome] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    const salary = document.getElementById('salary');
    const extraIncome = document.getElementById('extraIncome');
    const total = Number(salary.value) + Number(extraIncome.value);
    const form = document.getElementById('incomeForm');

    setTotalIncome(total);
    handleSetAmountLeft(null, total);
    createBudget(true);
    setSubmitted(true);

    salary.disabled = true;
    extraIncome.disabled = true;
    form.reset();
  };

  return (
    <form className={styles.form} id='incomeForm'>
      {!submitted && (
        <>
          <InputField title={'salary'} />
          <AiOutlinePlus className={styles.icon} />
          <InputField title={'extra income'} />

          <button disabled={totalIncome} className={styles['submit-button']} onClick={onSubmit}>
            Create Budget
          </button>
        </>
      )}

      {totalIncome && (
        <>
          <InputField title={'total'} type={'total'} defaultValue={totalIncome} />
          <IncomeLeftInputField title={'income left'} type={'incomeLeft'} value={amountLeft} />
        </>
      )}
    </form>
  );
};
