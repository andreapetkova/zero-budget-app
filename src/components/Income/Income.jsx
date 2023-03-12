import styles from './Income.module.css';
import { IncomeForm } from './InputForm';

export const Income = () => {
  return (
    <div className={styles['income-container']}>
      <h2 className={styles.title}>Income:</h2>
      <IncomeForm />
    </div>
  );
};
