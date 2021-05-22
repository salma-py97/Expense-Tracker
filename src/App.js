import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import GlobalState from './context/GlobalState'


function App() {
  return (
    <GlobalState>
      <div>
        <Header title="Expense Tracker" />

        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
