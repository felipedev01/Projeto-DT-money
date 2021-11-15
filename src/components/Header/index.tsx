
import {useState}from 'react'
import logo from '../../Assets/Logo.svg'
import { Container, Contant } from './style'
import Modal from 'react-modal';

export function Header(){

    const[isOpenModalTransaction,setisOpenModalTransaction]=useState(false)

    function handleOpenModal(){

         setisOpenModalTransaction(true)
    }
    function handleCloseModal(){

       setisOpenModalTransaction(false)
    }

    return(
       <Container>
           <Contant>
           <img src={logo} alt="Logo" />
            <button type="button" onClick={handleOpenModal}>Nova Transação</button>
           </Contant>
          <Modal isOpen={isOpenModalTransaction} onRequestClose={handleCloseModal}>

              <p>Transaçôes</p>
          </Modal>
       </Container>
            
        
            
        
    )


}