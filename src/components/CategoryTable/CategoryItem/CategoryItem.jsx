import { useIncomeContext } from '../../../context/IncomeContext.context';
import { stringFormattingForInputId } from '../../../helpers/stringFormattingForInputId';
import { InputField } from '../../Income/InputField';
import styles from './CategoryItem.module.css';

export const CategoryItem = ({ title }) => {
  const { amountLeft, handleSetAmountLeft } = useIncomeContext();

  const handleOnAdd = () => {
    const currentAmount = Number(document.getElementById(stringFormattingForInputId(title)).value);
    handleSetAmountLeft(amountLeft - currentAmount);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.item}>{title}</h3>
      <InputField title={title} onChange={handleOnAdd} />
    </div>
  );
};
