import { useIncomeContext } from '../../../context';
import { stringFormattingForInputId } from '../../../helpers';
import { InputField } from '../../InputField';
import { Title } from '../../Title/Title';

import styles from './EmergencyFund.module.css';

export const EmergencyFund = () => {
  const { amountLeft, handleSetAmountLeft } = useIncomeContext();

  const handleOnAdd = () => {
    const currentAmount = document.getElementById(stringFormattingForInputId('emergency fund'));

    handleSetAmountLeft(amountLeft - Number(currentAmount.value));
    currentAmount.disabled = true;
  };

  return (
    <div className={styles['emergency-fund']}>
      <Title title={'emergency fund'} />
      <InputField title={'emergency fund'} onChange={handleOnAdd} />
    </div>
  );
};
