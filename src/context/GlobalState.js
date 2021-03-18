import React, { useReducer } from 'react'


const initialState = localStorage.getItem('transactions') 
    ? JSON.parse(localStorage.getItem('transactions'))
    : { transactions: [], /* ,...initialState */ } 

export const contextData = React.createContext();

const Reducer = (state , action) => {
    switch (action.type) {
        case 'ADD':
            return {...state , transactions: [...state.transactions , action.payLoad] };
        case 'DELETE':
            return {...state , transactions: state.transactions.filter(transaction => transaction.id !== action.payLoad) }
        default:
            return state
    }
};

// Provider - C o m p o n e n t
const GlobalState = ({children}) => {
    const [ state , dispatch ] = useReducer(Reducer , initialState);

    React.useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state]);

    function addEvent(transaction) {
        dispatch({type:'ADD' , payLoad: transaction})
    };

    return (
        <contextData.Provider value={{
            dispatch , 
            transactions: state.transactions , 
            addEvent
        }}>
            {children}
        </contextData.Provider>
    )
}

export default GlobalState
