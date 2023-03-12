import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryForm.module.css';

export const CategoryForm = ({ title, items }) => {
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

  const categoryNames = Object.keys(items);
  return (
    <form className={inputStyle}>
      <Title title={title} />
      {categoryNames.map(category => (
        <CategoryItem title={category} key={Math.random()} />
      ))}
    </form>
  );
};
