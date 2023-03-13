import { Chip } from '../../Chip';
import { Title } from '../../Title';

import styles from '../FormStyles.module.css';

export const SubmittedForm = ({ inputStyle, title, categoryNames, items }) => (
  <div className={inputStyle}>
    <div>
      <Title title={title} />
      {categoryNames.map(category => (
        <div key={title} className={styles['submitted-form']}>
          <h3 className={styles.item}>{category}</h3>
          <div className={styles['submitted-form-data']}>
            <Chip title={'Limit'} value={items[category].limit} style={{ width: '50px' }} />
            <Chip
              title={'Currently Spent'}
              value={items[category].currentlySpent}
              style={{ width: '50px' }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
