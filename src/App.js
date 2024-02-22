
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpress from './components/IncomeExpress';
import TransactionList from './components/TransactionList';
import Addtransaction from './components/Addtransaction';

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpress />
        <TransactionList />
        <Addtransaction />
      </div>
    </div>
  );
}

export default App;
