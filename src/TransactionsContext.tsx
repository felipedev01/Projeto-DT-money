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

    transactions:typeTransaction[];
   //
    createTransaction:(transaction:TransactionInput) => Promise<void>;
}

export const TransactionsContext=createContext<TransactionsContextData>({

} as TransactionsContextData
);

export function TransactionsProvider({children}:TransactionProviderProps){

    

    const[transactions , setTransaction]=useState<typeTransaction[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
        

    },[]

   

    )

    async function createTransaction(transactionInput:TransactionInput){

       
         
      const response =  await api.post('/Transactions',{...transactionInput,createdAt:new Date()})
      const {transaction}= response.data

      setTransaction([...transactions, transaction])
    }

    

return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>
)
    
}