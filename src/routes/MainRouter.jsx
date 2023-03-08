import { Route, Routes } from 'react-router';
import { Layout } from '../layout';
import { Budget } from '../pages/Budget';
import { TransactionHistory } from '../pages/TransactionHistory';

export const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Budget />} />
        <Route path={'/budget'} element={<Budget />} />
        <Route path={'/transaction-history'} element={<TransactionHistory />} />
      </Route>
    </Routes>
  );
};
