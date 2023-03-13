import { useCallback, useState } from 'react';
import { useMutateCreateBudget } from '../../hooks';
import { constructBudgetPayload } from '../../helpers';

import { CreateBudgetForm } from './CreateBudgetForm';
import { SubmittedForm } from './SubmittedForm';

import styles from './FormStyles.module.css';

export const CategoryForm = ({ title, items }) => {
  const [submitted, setSubmitted] = useState(false);
  const { mutateCreateNeedsBudget, mutateCreateWantsBudget } = useMutateCreateBudget();

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

  const categoryNames = Object.keys(items).sort();

  const sendBudgetRequest = useCallback(
    (title, formData) => {
      const payload = constructBudgetPayload(formData);

      switch (title) {
        case 'needs':
          mutateCreateNeedsBudget.mutate(payload);
          break;
        case 'wants':
          mutateCreateWantsBudget.mutate(payload);
          break;
        case 'savings':
          //implement savings logic
          break;
        default:
          break;
      }
    },
    [mutateCreateNeedsBudget, mutateCreateWantsBudget],
  );

  const handleOnSubmit = useCallback(() => {
    const budgetForm = document.getElementById(title);

    budgetForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(document.getElementById(title));

      sendBudgetRequest(title, formData);
      setSubmitted(true);
    });
  }, [sendBudgetRequest, title]);

  return !submitted ? (
    <CreateBudgetForm
      inputStyle={inputStyle}
      title={title}
      categoryNames={categoryNames}
      handleOnSubmit={handleOnSubmit}
    />
  ) : (
    <SubmittedForm
      inputStyle={inputStyle}
      title={title}
      categoryNames={categoryNames}
      items={items}
    />
  );
};
