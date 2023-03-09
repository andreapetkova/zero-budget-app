import { stringFormattingForInputId } from '../../../helpers/stringFormattingForInputId';
import { stringFormattingForInputTitle } from '../../../helpers/stringFormattingForInputTitle';
import styles from './InputField.module.css';

export const InputField = ({ type, title, defaultValue, onChange }) => {
  const labelTitle = stringFormattingForInputTitle(title);
  const idTitle = stringFormattingForInputId(title);

  let inputStyle = styles['input-field'];
  switch (type) {
    case 'total':
      inputStyle += ` ${styles['input-field-total']}`;
      break;
    case 'incomeLeft':
      inputStyle += ` ${styles['input-field-income-left']}`;
      break;

    default:
      break;
  }

  return (
    <div className={styles['form-input']}>
      <label className={styles['input-label']}>{labelTitle}</label>
      <input
        type='text'
        name={idTitle}
        id={idTitle}
        className={inputStyle}
        defaultValue={defaultValue}
        onBlur={onChange}
      />
    </div>
  );
};
