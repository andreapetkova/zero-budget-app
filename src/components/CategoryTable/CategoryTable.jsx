import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryTable.module.css';

export const CategoryTable = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <Title title={title} />
      {items.map(category => (
        <CategoryItem title={category} key={Math.random()} />
      ))}
    </div>
  );
};
