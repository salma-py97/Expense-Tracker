import Transaction from './Transaction'

import { useContext } from 'react'
import GlobalContext from '../context/globalContext'


const TransactionList = () => {
    // init Context
    const globalContext = useContext(GlobalContext);

    // Destructuring - globalContext
    const {transactions} = globalContext

    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
            ))}

            </ul>
        </>
    )
}

export default TransactionList
