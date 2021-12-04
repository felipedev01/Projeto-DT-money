import logoEntrada from '../../Assets/Entradas.svg'
import logoSaida from '../../Assets/Saídas.svg'
import logoTotal from '../../Assets/Total.svg'
import { Container} from './style'
import {useContext} from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary(){

    const {transactions}= useContext(TransactionsContext)

  

   const totalDepositos= transactions.reduce((acc , transations)=>{

    if(transations.type==='deposit'){

        return acc + transations.amount
            
    }return acc;
   },0)

  const totalSaidas = transactions.reduce((acc, transactions)=>{

    if(transactions.type==='withDraw'){
        return acc + transactions.amount
    }
    return acc;
  },0)

    return(

        <Container>

           
            <div>
               
                <header>
                <p>Entrada</p>
                <img src={logoEntrada} alt="Entrada" />
            </header>
                
            
            
            <strong>{totalDepositos}</strong>
        </div>
            
           

        <div>
            <header>
                <p>Saída</p>
                <img src={logoSaida} alt="Saída" />
            </header>
            <strong>{totalSaidas}</strong>
        </div>
        <div className="Total">
            <header>
                <p>Total</p>
                <img src={logoTotal} alt="Total" />
            </header>
            <strong>{totalDepositos-totalSaidas}</strong>
        </div>
        </Container>

        
        
    )
}