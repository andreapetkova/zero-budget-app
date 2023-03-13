import { useState } from 'react';
import { useIncomeContext } from '../../../context';
import { InputField } from '../../InputField';

import styles from './CategoryItem.module.css';

export const CategoryItem = ({ title }) => {
  const { handleSetAmountLeft } = useIncomeContext();
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleOnBlur = () => {
    try {
      handleSetAmountLeft(value);
    } catch (err) {
      setError(err.message);
      setValue('');
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.item}>{title}</h3>
      <InputField
        title={title}
        onChange={e => {
          setValue(Number(e.target.value));
          setError(null);
        }}
        onBlur={handleOnBlur}
        value={value}
        error={error}
      />
    </div>
  );
};
