import React from 'react'
import {contextData} from '../context/GlobalState'

const Transaction = ({amount ,id, text}) => {

    const {dispatch} = React.useContext(contextData);
    const sign = amount < 0 ? "-" : "+" ;
  
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={()=> dispatch({type:'DELETE', payLoad: id})}>❌</button>
        </li>  
    )
}

export default Transaction
