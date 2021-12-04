import logoEntrada from '../../Assets/Entradas.svg'
import logoSaida from '../../Assets/Saídas.svg'
import logoTotal from '../../Assets/Total.svg'
import { Container} from './style'
import {useContext} from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { access } from 'fs'

export function Summary(){

    const {transactions}= useContext(TransactionsContext)

  

 
  const summary=transactions.reduce((acc,transactions)=>{

    if(transactions.type==='deposit'){

        
            acc.deposits+=transactions.amount
            acc.total +=transactions.amount
            
    }else{
       
            acc.withDraws+=transactions.amount
            acc.total-=transactions.amount
           
    }
    return acc; 
    },
   
  
  
  {
      deposits:0,
      withDraws:0,
      total:0,
  })

  console.log(summary)

    return(

        <Container>

           
            <div>
               
                <header>
                <p>Entrada</p>
                <img src={logoEntrada} alt="Entrada" />
            </header>
                
            
            
            <strong>{summary.deposits}</strong>
        </div>
            
           

        <div>
            <header>
                <p>Saída</p>
                <img src={logoSaida} alt="Saída" />
            </header>
            <strong>{summary.withDraws}</strong>
        </div>
        <div className="Total">
            <header>
                <p>Total</p>
                <img src={logoTotal} alt="Total" />
            </header>
            <strong>{summary.total}</strong>
        </div>
        </Container>

        
        
    )
}