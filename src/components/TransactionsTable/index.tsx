
import { useTransactions } from '../../hooks/useTransactions'


import { Container } from './style'

export function TransactionsTable(){

    const {transactions}=useTransactions()

   
    
    
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

                {transactions.map(transactions=>{

                  return(

                    <tr key={transactions.id}>
                    
                    <td>{transactions.title}</td>
                    <td className={transactions.type}>{new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL',
                    }).format(Number(transactions.amount))
                    }</td>
                    <td>{transactions.category}</td>
                    <td>{new Intl.DateTimeFormat('pt-BR',{
                        
                    }).format(new Date(transactions.createdAt))
                    }</td>
                </tr>

                  )


                })}
                
                
            </tbody>
        </table>
        </Container>
        
    )
}