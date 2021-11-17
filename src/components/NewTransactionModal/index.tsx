import Modal from 'react-modal';
import { Container, TrasactionTypeContainer,RadioButton } from './style';
import fecharModal from '../../Assets/Vector.svg'
import entrada from '../../Assets/Entradas.svg'
import saida from '../../Assets/Saídas.svg'
import {useState} from 'react';
interface NewTrasactionModalProps {

  isOpen:boolean;
  onRequestClose:()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){

  const[type , setType]=useState(' ')

  
    return(
 
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
         >
        <button type="button" onClick={onRequestClose}
        className="react-modal-close">
        <img src={fecharModal} alt="Fechar Modal" /></button>
        <Container>
      <h2>Cadastrar Transação</h2>      
       <input placeholder="Titulo"></input>
       <input type="Number" placeholder="Preço"></input>
       <TrasactionTypeContainer>
        
      <RadioButton type="button" 
      onClick={()=>{setType('deposit')}}
      isActive={type==='deposit'}
      ActiveColor='green'>
      <img src={entrada} alt="Entrada" /><span>Entrada</span>
      
        
      </RadioButton>
      <RadioButton type="button" 
      onClick={()=>{setType('withDraw')}}
      isActive={type==='withDraw'}
      ActiveColor='red'>
      
      <img src={saida} alt="Saída" /><span>Saída</span>
      </RadioButton>
     
       </TrasactionTypeContainer>
       <input placeholder="Categoria"/>
       <button type="submit">Cadastrar</button>

       </Container>
   </Modal>
  
 
    )
    
}