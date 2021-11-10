import React, { useState } from 'react'
import { contextData } from '../context/GlobalState'

export const AddTransaction = () => {

  const { addEvent, editObj, setEditObj } =
    React.useContext(contextData);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [datetime, setDatetime] = useState('');

  React.useEffect(() => {
    setText(editObj.text);
    setAmount(editObj.amount);
    setDatetime(editObj.datetime)
  }, [editObj]);

  const onSubmit = (event) => {
    event.preventDefault();
    const InputValues = new FormData(event.currentTarget);
    for (let value of InputValues.values()) {
      if (value === '' || value === '0') {
       return alert('Fill Information');
      }
    };

    const transaction = {
      id: new Date().getTime().toString(),
      datetime, text, amount
    };

    if (JSON.stringify(editObj)==='{}') {
      addEvent(transaction, "ADD");
      setText("");
      setAmount(0);
      setDatetime("");
    }
    else {
      addEvent({ ...editObj, text, amount, datetime }, "EDIT");
      setEditObj({});
      setText("");
      setAmount(0);
      setDatetime("");
    }
  };

  return (
    <>
      <h3>
        {Object.keys(editObj).length === 0
          ? "Add New Transaction"
          : "Edit Transaction"}
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name='text'
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />( Negative - Expense , Positive - Income )
          </label>
          <input
            id="amount"
            type="number"
            name='amount'
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name='date'
            type="date"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value.toString())}
          />
        </div>
        <button className="btn" type="submit">
          Submit Transaction
        </button>
      </form>
    </>
  );
}
