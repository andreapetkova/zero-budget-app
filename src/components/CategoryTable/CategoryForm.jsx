import { Title } from '../Title/Title';
import { CategoryItem } from './CategoryItem/CategoryItem';
import styles from './CategoryForm.module.css';
import { useBudgetContext } from '../../context';
import { useEffect } from 'react';

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

  const categoryNames = Object.keys(items);

  useEffect(() => {
    if (openBudget) {
      const budgetForm = document.getElementById(title);

      budgetForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(document.getElementById(title));

        for (var [key, value] of formData.entries()) {
          console.log(key, value);
        }
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
