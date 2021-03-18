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
            <>
                {total > 0 ? <h1 style={{ color: '#0ec55a', textShadow: '3px 3px 4px rgb(99, 233, 99)' }}>${total}</h1> : <h1 style={{color:'#d5484f' ,textShadow:'3px 3px 4px rgb(243, 142, 142'}}>-${Math.abs(total).toFixed(2)}</h1> }
            </>
        </>
    )
}
