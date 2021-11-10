import React, { useReducer , useState } from 'react'


const initialState = localStorage.getItem('transactions') 
    ? JSON.parse(localStorage.getItem('transactions'))
    : { transactions: [] }

export const contextData = React.createContext();

const Reducer = (state , action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          transactions: [...state.transactions, action.payLoad]
        }; break
      case "DELETE":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payLoad
          ),
        };
      case "EDIT":  
        return {
          ...state,
          transactions: [
            ...state.transactions.map((tran) =>
              tran.id === action.payLoad.id
                ? (tran = { ...action.payLoad })
                : tran
            )
          ],
        }; break
        
      default: return state;
    }
};

// Provider - C o m p o n e n t
const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [editObj, setEditObj] = useState({})
    console.log(state);

    React.useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state]);

    function addEvent(transaction ,type) {  
        dispatch({type: type , payLoad: transaction})
    };

    return (
        <contextData.Provider
            value={{
                dispatch ,
                transactions: state.transactions,
                editObj, setEditObj,
                addEvent
            }}
        >
            {children}
        </contextData.Provider>
    )
}

export default GlobalState
