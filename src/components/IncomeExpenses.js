import React from 'react'
import {contextData} from '../context/GlobalState'


export const IncomeExpenses = () => {
    const { transactions } = React.useContext(contextData);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc , item) => (acc += item),0).toFixed(2);

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc , item) => (acc += item),0).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>
                    +{income}
                </p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus'>
                    {expense}
                </p>
            </div>
        </div>
    )
}
