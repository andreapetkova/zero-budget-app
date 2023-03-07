import { Route, Routes } from 'react-router';
import { MenuLinks } from '../components/MenuLinks';
import { Budget } from '../pages/Budget';
import { TransactionHistory } from '../pages/TransactionHistory';

export const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MenuLinks />}>
        <Route index element={<Budget />} />
        <Route path={'/budget'} element={<Budget />} />
        <Route path={'/transaction-history'} element={<TransactionHistory />} />
      </Route>
    </Routes>
  );
};
