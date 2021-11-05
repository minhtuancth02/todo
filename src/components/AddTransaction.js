import React, { useState }from 'react'
import { contextData } from  '../context/GlobalState'

export const AddTransaction = () => {

    const { addEvent, editObj, setEditObj } =
      React.useContext(contextData);

    const [ text , setText ] = useState('');
    const [ amount , setAmount ] = useState(0);
    // const [ edit, setEdit ] = useState(transactions.filter(transaction => transaction.isEdit === true))

    React.useEffect(() => {
        setText(editObj.text);
        setAmount(editObj.amount)
    }  , [editObj]);
    console.log(editObj)
    
    const onSubmit = (e) => {
      e.preventDefault();
      const transaction = {
        id: new Date().getTime().toString(),
        text,
        amount
      };
      if(JSON.stringify(editObj) === "{}") addEvent(transaction , 'ADD');
      else addEvent({ ...editObj, text, amount }, 'EDIT');
      setEditObj({});
      setText('');
      setAmount(0);
    };


    return (
      <>
        <h3>
          {Object.keys(editObj).length === 0
            ? "Add New Transaction"
            : "Edit Transaction"
          }
        </h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
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
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
            <button
                className="btn"
                onClick={onSubmit}
            >
                Submit Transaction
            </button>
        </form>
      </>
    );
}
