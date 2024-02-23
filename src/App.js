
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpress from './components/IncomeExpress';
import TransactionList from './components/TransactionList';
import Addtransaction from './components/Addtransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpress />
        <TransactionList />
        <Addtransaction />

      </div>
    </GlobalProvider>
  );
}

export default App;
