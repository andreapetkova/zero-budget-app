import { stringFormattingForInputTitle } from '../../helpers';
import styles from './Chip.module.css';

export const Chip = ({ title, type, value, style }) => {
  const labelTitle = stringFormattingForInputTitle(title);

  let chipStyle = styles.chip;
  switch (type) {
    case 'total':
      chipStyle += ` ${styles['chip-total']}`;
      break;
    case 'incomeLeft':
      chipStyle += ` ${styles['chip-income-left']}`;
      break;

    default:
      break;
  }

  return (
    <div className={styles.container}>
      <p>{labelTitle}</p>
      <p className={chipStyle} style={style}>
        {value}
      </p>
    </div>
  );
};
