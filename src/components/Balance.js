
import { useContext } from 'react'
import GlobalContext from '../context/globalContext'


const Balance = () => {
    // init Context
    const globalContext = useContext(GlobalContext);

    // Destructuring - globalContext
    const {transactions} = globalContext

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((currentTotal, item) => (item += currentTotal), 0).toFixed(2);


    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
