import React from 'react'
import { contextData } from '../context/GlobalState'
import Transaction from './Transaction';

export const TransactionList = () => {
    const { transactions , dispatch  } = React.useContext(contextData);
    
    return (
        <>
            <h3>History</h3>
            <ul className="list" style={{overflow: 'scroll' , maxHeight: '290px'}}>
                {transactions.map( transaction =>
                    <Transaction key={transaction.id}
                                 dispatch={dispatch}
                                 {...transaction} 
                    />
                )}
            </ul>
        </>
    )
}
