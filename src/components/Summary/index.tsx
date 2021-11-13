import logoEntrada from '../../Assets/Entradas.svg'
import { Container} from './style'

export function Summary(){

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
                <img src={logoEntrada} alt="Entrada" />
            </header>
            <strong>R$100,00</strong>
        </div>
        <div>
            <header>
                <p>Total</p>
                <img src={logoEntrada} alt="Entrada" />
            </header>
            <strong>R$100,00</strong>
        </div>
        </Container>

        
        
    )
}