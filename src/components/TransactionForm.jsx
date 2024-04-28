import React, { useState } from 'react';
import './all.css';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      category,
      amount: parseFloat(amount),
      date
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <div id='form-container'>
    <form className="horizontal-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className="form-row">
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div className="form-row">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
    </div>
  );
}

export default TransactionForm;
