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
interface TransactionInput {
    title:string,
    amount:Number,
    type:string,
    category:string,
}
interface TransactionsContextData {

    transaction:typeTransaction[];
   //
    createTransaction:(transaction:TransactionInput) => Promise<void>;
}

export const TransactionsContext=createContext<TransactionsContextData>({

} as TransactionsContextData
);

export function TransactionsProvider({children}:TransactionProviderProps){

    

    const[transaction , setTransaction]=useState<typeTransaction[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
        

    },[]

   

    )

    async function createTransaction(transactionInput:TransactionInput){

       
         
      const response =  await api.post('/Transactions',transactionInput)
      const {transaction}= response.data
    }

    

return(
    <TransactionsContext.Provider value={{transaction, createTransaction}}>
        {children}
    </TransactionsContext.Provider>
)
    
}