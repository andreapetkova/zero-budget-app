import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { AddExpense } from '../../components/AddExpense';
import { budgetApi, queryKeys } from '../../services';
import { useColumns } from './useColumns';

export const TransactionHistory = () => {
  const { data: rows, isLoading } = useQuery({
    queryKey: queryKeys.getExpenses,
    queryFn: budgetApi.getExpenses,
  });

  const columns = useColumns();

  return (
    <div style={{ width: '100%', height: '450px' }}>
      <AddExpense />
      {!isLoading && (
        <DataGrid
          sx={{ border: `4px solid var(--color-darkerLightGreen)` }}
          rows={Object.values(rows)}
          columns={columns}
        />
      )}
    </div>
  );
};
