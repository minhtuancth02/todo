import React from 'react'
import { contextData } from  '../context/GlobalState'

export const AddTransaction = () => {

    const { addEvent } = React.useContext(contextData);

    const [ text , setText ] = React.useState('');
    const [ amount , setAmount ] = React.useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const transaction = {
            id : new Date().getTime().toString(),
            text,
            amount
        }
        return addEvent(transaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input  type='text' id='text' placeholder='Enter text...'
                            value={text} onChange={(e) => setText(e.target.value)}                
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br/> 
                        ( Negative - Expense , Positive - Income )
                    </label>
                    <input  id='amount' type='number' placeholder='Enter amount...' 
                            value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                </div>
                <button 
                    className='btn'
                    onClick={onSubmit}
                >
                    Add Transaction
                </button>
            </form>            
        </>
    )
}
