import './TransactionHistory.modules.css';

export const useColumns = () => {
  return [
    {
      field: 'category',
      headerName: 'Category',
      headerAlign: 'center',
      align: 'center',
      headerClassName: 'grid-header',
      width: 400,
    },
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      align: 'center',
      headerClassName: 'grid-header',
      width: 400,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      headerClassName: 'grid-header',
      width: 400,
    },
  ];
};
