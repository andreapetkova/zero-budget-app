import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryTable.module.css';
import { EmergencyFund } from './EmergencyFund';

export const CategorySavingsTable = ({ title, generalItems, secondaryItems }) => {
  let inputStyle = `${styles.container} + ' ' + ${styles.savings}`;

  return (
    <form className={inputStyle}>
      <Title title={title} />
      <div className={styles['savings-container']}>
        <div className={styles['general-savings']}>
          {generalItems.map(category => (
            <CategoryItem title={category} key={Math.random()} />
          ))}
          <hr />
          {secondaryItems.map(category => (
            <CategoryItem title={category} key={Math.random()} />
          ))}
        </div>
        <EmergencyFund />
      </div>
    </form>
  );
};
