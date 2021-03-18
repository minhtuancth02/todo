
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import GlobalState from './context/GlobalState';



function App() {
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <div className='container'>
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
