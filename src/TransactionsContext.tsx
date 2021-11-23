import {createContext,useEffect,useState,ReactNode} from 'react'
import { api } from '../src/services/api'

interface typeTransaction {

    id:string,
    title:string,
    amount:Number,
    category:string,
    createdAt:string,
    type:string,

}
interface TransactionProviderProps {

    children:ReactNode;
}

export const TransactionsContext=createContext<typeTransaction[]>([]);

export function TransactionsProvider({children}:TransactionProviderProps){

    

    const[transaction , setTransaction]=useState<typeTransaction[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
        

    },[]

    )

    

return(
    <TransactionsContext.Provider value={transaction}>
        {children}
    </TransactionsContext.Provider>
)
    
}