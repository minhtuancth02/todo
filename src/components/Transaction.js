import React from 'react'
import {contextData} from '../context/GlobalState'

const Transaction = ({ amount, id, text }) => {

  const { dispatch , setEditObj} = React.useContext(contextData);
  const sign = amount < 0 ? "-" : "+" 

  // React.useEffect(() => {
  //   dispatch({ type: 'EDIT', payLoad: { id: id, isEdit: isEdit } })   
  // },[isEdit])


  return (
    <li
      className={amount < 0 ? "minus" : "plus"}
      onClick={() => {
        console.log(text, amount, id);
        setEditObj(() => ({id: id , amount: amount , text}))
      }}
    >
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE", payLoad: id })}
      >
        ❌
      </button>
    </li>
  );
}

export default Transaction
