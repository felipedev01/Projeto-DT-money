
import { Component } from 'react'
import logo from '../../Assets/Logo.svg'
import { Container, Contant } from './style'

export function Header(){

    return(
       <Container>
           <Contant>
           <img src={logo} alt="Logo" />
            <button>Nova Transação</button>
           </Contant>
           
       </Container>
            
        
            
        
    )


}