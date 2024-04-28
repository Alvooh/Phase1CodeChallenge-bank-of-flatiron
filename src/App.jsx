import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import "./App.css"

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Groceries', amount: 50,category:"utilities", date: '2024-04-28' },
    { id: 2, description: 'Gas', amount: 30, category:"utilities", date: '2024-04-27' },

  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (<>
    <Header/>
    <div className="App">
      
     
      <SearchBar onSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
     
    </div>
    </>
  );
}

export default App;
