import styles from './IncomeForm.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { IncomeLeftInputField, InputField } from '../InputField';
import { useIncomeContext } from '../../../context/IncomeContext.context';

export const IncomeForm = () => {
  const { amountLeft, handleSetAmountLeft } = useIncomeContext();

  const [totalIncome, setTotalIncome] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    const salary = document.getElementById('salary');
    const extraIncome = document.getElementById('extraIncome');
    const total = Number(salary.value) + Number(extraIncome.value);
    const form = document.getElementById('incomeForm');

    setTotalIncome(total);
    handleSetAmountLeft(total);
    setDisabled(true);

    salary.disabled = true;
    extraIncome.disabled = true;
    form.reset();
  };

  return (
    <form className={styles.form} id='incomeForm'>
      <InputField title={'salary'} />

      <AiOutlinePlus className={styles.icon} />

      <InputField title={'extra income'} />

      <button
        disabled={totalIncome}
        className={disabled ? styles['disabled-button'] : styles['submit-button']}
        onClick={onSubmit}
      >
        Add
      </button>

      {totalIncome && (
        <>
          <InputField title={'total'} type={'total'} defaultValue={totalIncome} />
          <IncomeLeftInputField title={'income left'} type={'incomeLeft'} value={amountLeft} />
        </>
      )}
    </form>
  );
};
