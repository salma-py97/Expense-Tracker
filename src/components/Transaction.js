import PropTypes from 'prop-types'

import { useContext } from 'react'
import GlobalContext from '../context/globalContext'
import IncomeExpenses from './IncomeExpenses';



const Transaction = ({transaction}) => {

    // init Context
    const globalContext = useContext(GlobalContext);

    // Destructuring - globalContext
    const {deleteTransaction} = globalContext

    // Destruction - contact
    const {id, text, amount} = transaction

    return (

        <li className={amount < 0 ? "minus" : "plus"}>
        {text} 
            <span>{amount > 0 ? "+" : "-"} ${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>

    )
}


IncomeExpenses.propTypes = {
    transaction: PropTypes.object.isRequired,
}

export default Transaction
