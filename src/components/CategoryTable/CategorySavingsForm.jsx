import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryForm.module.css';
import { EmergencyFund } from './EmergencyFund';

export const CategorySavingsTable = ({ title, primaryItems, secondaryItems }) => {
  let inputStyle = `${styles.container} + ' ' + ${styles.savings}`;

  return (
    <form className={inputStyle}>
      <Title title={title} />
      <div className={styles['savings-container']}>
        <div className={styles['general-savings']}>
          {Object.keys(primaryItems).map(category => (
            <CategoryItem title={category} key={Math.random()} />
          ))}
          <hr />
          {Object.keys(secondaryItems).map(category => (
            <CategoryItem title={category} key={Math.random()} />
          ))}
        </div>
        <EmergencyFund />
      </div>
    </form>
  );
};
