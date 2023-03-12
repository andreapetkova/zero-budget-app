import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryForm.module.css';
import { useBudgetContext } from '../../context';
import { useEffect } from 'react';
import { constructPayload } from '../../helpers/constructPayload';
import { budgetApi } from '../../services';

export const CategoryForm = ({ title, items }) => {
  let inputStyle = styles.container;
  const { openBudget } = useBudgetContext();

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

  const categoryNames = Object.keys(items).sort();

  useEffect(() => {
    if (openBudget) {
      const budgetForm = document.getElementById(title);

      budgetForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(document.getElementById(title));

        const payload = constructPayload({ type: title, items: formData });
      });
    }
  }, [openBudget, title]);

  return (
    <form className={inputStyle} id={title} autoComplete='off'>
      <div>
        <Title title={title} />
        {categoryNames.map(category => (
          <CategoryItem title={category} key={Math.random()} />
        ))}
      </div>
      <button type='submit' className={styles['submit-button']}>
        Submit
      </button>
    </form>
  );
};
