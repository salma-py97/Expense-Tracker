import { useReducer } from 'react';
import GlobalContext from './globalContext'
import AppReducer from './AppReducer'


// import Types
import {DELETE_TRANSACTION, ADD_TRANSACTION} from './types'

const GlobalState = props => {

    // initial State
    const initialState = {
        transactions: [
            {
                id: 1,
                text: 'Flower',
                amount: -20
            },
            {
                id: 2,
                text: 'Salary',
                amount: 300
            },
            {
                id: 3,
                text: 'Book',
                amount: -10
            },
            {
                id: 4,
                text: 'Camera',
                amount: 150
            }
        ],
        transaction: {}
    }


    // Reducer Function
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    // add transaction
    const addTransaction = (transaction) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTransaction = {id, ...transaction}
        dispatch({type: ADD_TRANSACTION, payload: newTransaction})

    }

    // delete transaction
    const deleteTransaction = (id) => {
        dispatch({type: DELETE_TRANSACTION, payload: id})
    }



    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState


