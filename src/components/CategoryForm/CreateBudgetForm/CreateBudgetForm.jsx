import { Title } from '../../Title';
import { CategoryItem } from '../CategoryItem';

import styles from '../FormStyles.module.css';

export const CreateBudgetForm = ({ inputStyle, title, categoryNames, handleOnSubmit }) => {
  return (
    <form className={inputStyle} id={title} autoComplete='off'>
      <div>
        <Title title={title} />
        {categoryNames.map(category => (
          <CategoryItem title={category} key={Math.random().toString(16).slice(2)} />
        ))}
      </div>
      <button type='submit' className={styles['submit-button']} onClick={handleOnSubmit}>
        Submit
      </button>
    </form>
  );
};
