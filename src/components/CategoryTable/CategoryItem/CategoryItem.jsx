import { useIncomeContext } from '../../../context/IncomeContext.context';
import { stringFormattingForInputId } from '../../../helpers/stringFormattingForInputId';
import { InputField } from '../../Income/InputField';
import styles from './CategoryItem.module.css';

export const CategoryItem = ({ title }) => {
  const { handleSetAmountLeft } = useIncomeContext();

  const handleOnAdd = () => {
    const currentAmount = document.getElementById(stringFormattingForInputId(title));
    console.log(currentAmount.value);
    try {
      handleSetAmountLeft(Number(currentAmount.value));
    } catch (err) {
      alert(err.message);
      currentAmount.value = '';
      return;
    }

    if (Number(currentAmount.value) > 0) {
      currentAmount.disabled = true;
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.item}>{title}</h3>
      <InputField title={title} onChange={handleOnAdd} />
    </div>
  );
};
