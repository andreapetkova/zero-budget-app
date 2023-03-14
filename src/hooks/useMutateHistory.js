import { useMutation, useQueryClient } from '@tanstack/react-query';
import { budgetApi, queryKeys } from '../services';

export const useMutateHistory = () => {
  const queryClient = useQueryClient();

  const onSuccess = () =>
    queryClient.invalidateQueries(queryKeys.getExpenses, budgetApi.getExpenses);

  const mutateExpenses = useMutation(budgetApi.postExpense, {
    mutationKey: queryKeys.postExpense,
    onSuccess,
  });

  return { mutateExpenses };
};
