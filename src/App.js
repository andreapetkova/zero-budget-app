import { MainRouter } from './routes/MainRouter';
import './variables.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BudgetContextProvider } from './context';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BudgetContextProvider>
        <MainRouter />
      </BudgetContextProvider>
    </QueryClientProvider>
  );
};
