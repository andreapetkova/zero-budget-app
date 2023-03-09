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

    const salary = Number(document.getElementById('salary').value);
    const extraIncome = Number(document.getElementById('extraIncome').value);
    const form = document.getElementById('incomeForm');

    setTotalIncome(salary + extraIncome);
    handleSetAmountLeft(salary + extraIncome);
    setDisabled(true);
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
