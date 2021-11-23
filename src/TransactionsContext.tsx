import {createContext,ReactNode,useState,useEffect} from 'react'
import { api } from './services/api'

interface TransactionProviderProps{
    children:ReactNode;
}
interface typeTransaction {

    id:string,
    title:string,
    amount:Number,
    category:string,
    createdAt:string,
    type:string,

}
 

export const TransactionContext=createContext<typeTransaction[]>([])

export function TransactionsContext({children}:TransactionProviderProps){

    const[transaction , setTransaction]=useState<typeTransaction[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
        

    },[]

    )


    return(
        <TransactionContext.Provider value={transaction}>
         {children}
        </TransactionContext.Provider>
    )
}