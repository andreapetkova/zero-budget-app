import { useMutation, useQueryClient } from '@tanstack/react-query';
import { budgetApi, queryKeys } from '../services';

export const useMutateCreateBudget = () => {
  const queryClient = useQueryClient();

  const onSuccess = () =>
    queryClient.invalidateQueries(queryKeys.getMonthlyBudget, budgetApi.getMonthlyBudget);

  const mutateCreateNeedsBudget = useMutation(budgetApi.putNeedsBudget, {
    mutationKey: queryKeys.putNeedsBudget,
    onSuccess,
  });

  const mutateCreateWantsBudget = useMutation(budgetApi.putWantsBudget, {
    mutationKey: queryKeys.putWantsBudget,
    onSuccess,
  });

  return { mutateCreateNeedsBudget, mutateCreateWantsBudget };
};
