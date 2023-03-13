import { stringFormattingForInputId } from '../../helpers';
import { stringFormattingForInputTitle } from '../../helpers';
import styles from './InputField.module.css';

export const InputField = ({ title, value, onChange, onBlur, error }) => {
  const labelTitle = stringFormattingForInputTitle(title);
  const idTitle = stringFormattingForInputId(title);

  return (
    <div className={styles['form-input']}>
      <label className={styles['input-label']}>{labelTitle}</label>
      <input
        type='text'
        name={idTitle}
        id={idTitle}
        className={styles['input-field']}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
