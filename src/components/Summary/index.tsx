import logoEntrada from '../../Assets/Entradas.svg'
import logoSaida from '../../Assets/Saídas.svg'
import logoTotal from '../../Assets/Total.svg'
import { Container} from './style'
import {useContext} from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary(){

    const data= useContext(TransactionsContext)

   

    return(

        <Container>

           
            <div>
               
                <header>
                <p>Entrada</p>
                <img src={logoEntrada} alt="Entrada" />
            </header>
                
            
            <strong>R$100,00</strong>
        </div>
            
           

        <div>
            <header>
                <p>Saída</p>
                <img src={logoSaida} alt="Saída" />
            </header>
            <strong>R$100,00</strong>
        </div>
        <div className="Total">
            <header>
                <p>Total</p>
                <img src={logoTotal} alt="Total" />
            </header>
            <strong>R$100,00</strong>
        </div>
        </Container>

        
        
    )
}