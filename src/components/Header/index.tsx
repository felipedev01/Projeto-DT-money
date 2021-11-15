

import logo from '../../Assets/Logo.svg'
import { Container, Contant } from './style'


interface headerProps {

    onOpenNewTransactionModal:()=> void;
}

export function Header({onOpenNewTransactionModal}:headerProps){

   

    return(
       <Container>
           <Contant>
           <img src={logo} alt="Logo" />
            <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
           </Contant>
        
       </Container>
            
        
            
        
    )


}