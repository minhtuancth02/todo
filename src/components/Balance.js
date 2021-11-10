import React from 'react'
import {contextData} from '../context/GlobalState'


export const Balance = () => {

    const { transactions } = React.useContext(contextData);
    const amounts = transactions.map(transaction => {
        return transaction.amount
    });

    const total = amounts.reduce((acc, item ) => (acc += item), 0).toFixed(2);

    return (
      <>
        <h4>Your Balance</h4>
        <h1
          style={total > 0
            ? { color: "#0ec55a", textShadow: "3px 3px 5px rgb(99, 233, 99)" }
            : { color: "#d5484f", textShadow: "3px 3px 5px rgb(243, 142, 142" }
          }
        >
          { total > 0 ? `$${total}` : `-$${Math.abs(total).toFixed(2)}` }
        </h1>
      </>
    );
}
