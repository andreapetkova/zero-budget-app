import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryTable.module.css';

export const CategoryTable = ({ title, items }) => {
  let inputStyle = styles.container;

  switch (title) {
    case 'needs':
      inputStyle += ` ${styles.needs}`;
      break;
    case 'wants':
      inputStyle += ` ${styles.wants}`;
      break;
    case 'savings':
      inputStyle += ` ${styles.savings}`;
      break;
    default:
      break;
  }

  return (
    <form className={inputStyle}>
      <Title title={title} />
      {items.map(category => (
        <CategoryItem title={category} key={Math.random()} />
      ))}
    </form>
  );
};
