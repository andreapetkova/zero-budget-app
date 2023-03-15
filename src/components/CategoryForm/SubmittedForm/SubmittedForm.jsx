import { Chip } from '../../Chip';
import { Title } from '../../Title';

import styles from '../FormStyles.module.css';

export const SubmittedForm = ({ inputStyle, title, categoryNames, items }) => (
  <div className={inputStyle}>
    <div>
      <Title title={title} />
      {categoryNames.map(category => (
        <div key={Math.random().toString(16).slice(2)} className={styles['submitted-form']}>
          <h3 className={styles.item}>{category}</h3>
          <div className={styles['submitted-form-data']}>
            <Chip
              title={'Limit'}
              value={items[category].limit.toFixed(2)}
              style={{ width: '50px' }}
            />
            <Chip
              title={'Currently Spent'}
              value={items[category].currentlySpent.toFixed(2)}
              style={{ width: '50px' }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
