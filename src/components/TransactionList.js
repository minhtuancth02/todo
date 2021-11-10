import React from 'react'
import { contextData } from '../context/GlobalState'
import Transaction from './Transaction';

export const TransactionList = () => {
  const { transactions , dispatch  } = React.useContext(contextData);

  const Setdate = React.useMemo(() => {
    return [...new Set(transactions.map((transaction) => transaction.datetime))].sort().reverse();
  }, [transactions]);

  console.log(transactions, Setdate);

    return (
      <>
        <h3>History</h3>
        <ul className="list" style={{ overflow: "scroll", maxHeight: "380px" }}>
          {Setdate.map((date) => (
            <>
              {date !== "undefined" ?
                <>
                  <p className="date">{date}</p>
                  {transactions.map(
                    (transaction) =>
                      transaction.datetime === date && (
                        <Transaction
                          key={transaction.id}
                          dispatch={dispatch}
                          {...transaction}
                        />
                      )
                  )}
                </> : null
              }
            </>
          ))}
        </ul>
      </>
    );
}
