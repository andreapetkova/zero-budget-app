import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem';
import { EmergencyFund } from './EmergencyFund';

import styles from './FormStyles.module.css';

export const CategorySavingsForm = ({ title, primaryItems, secondaryItems }) => {
  let inputStyle = `${styles.container} + ' ' + ${styles.savings}`;

  return (
    <form className={inputStyle}>
      <Title title={title} />
      <div className={styles['savings-container']}>
        <div className={styles['general-savings']}>
          {Object.keys(primaryItems).map(category => (
            <CategoryItem title={category} key={Math.random().toString(16).slice(2)} />
          ))}
          <hr />
          {Object.keys(secondaryItems).map(category => (
            <CategoryItem title={category} key={Math.random().toString(16).slice(2)} />
          ))}
        </div>
        <EmergencyFund />
      </div>
    </form>
  );
};
