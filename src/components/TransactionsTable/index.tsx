import { useEffect,useState} from 'react'
import { api } from '../../services/api'
import { Container } from './style'

export function TransactionsTable(){

    const[transaction , setTransaction]=useState<typeTransaction[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
        

    },[]

    )

    interface typeTransaction {

        id:string,
        title:string,
        amount:Number,
        category:string,
        createdAt:string,
        type:string,

    }
    
    return(
        
        <Container>
            <table>
            <thead>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
                
            </thead>
            <tbody>

                {transaction.map(transaction=>{

                  return(

                    <tr key={transaction.id}>
                    
                    <td>{transaction.title}</td>
                    <td className="deposit">{new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL',
                    }).format(Number(transaction.amount))
                    }</td>
                    <td>{transaction.category}</td>
                    <td>{new Intl.DateTimeFormat('pt-BR',{
                        
                    }).format(new Date(transaction.createdAt))
                    }</td>
                </tr>

                  )


                })}
                
                
            </tbody>
        </table>
        </Container>
        
    )
}