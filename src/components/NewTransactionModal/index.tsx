import Modal from 'react-modal';
import { Container, TrasactionTypeContainer,RadioButton } from './style';
import fecharModal from '../../Assets/Vector.svg'
import entrada from '../../Assets/Entradas.svg'
import saida from '../../Assets/Saídas.svg'
import {FormEvent, useState} from 'react';

import { useTransactions } from '../../hooks/useTransactions';
interface NewTrasactionModalProps {

  isOpen:boolean;
  onRequestClose:()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){

  const {createTransaction}=useTransactions()
  const[type , setType]=useState(' ')

  const[title, setTitle]=useState('')
  const[value , setValue]=useState(0)
  const[category, setCategory]=useState('')

  async function HandleCreateNewTransaction(event:FormEvent){

    
     event.preventDefault();
     
    createTransaction({

      title,
      amount:value,
      category,
      type,
    }

    )
    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  
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
        <Container onSubmit={HandleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>      
       <input 
       placeholder="Titulo"
       value={title}
       onChange={event=>setTitle(event.target.value)}
       ></input>
       <input
       type="Number" 
       placeholder="Preço"
       value={value}
       onChange={event=>setValue(Number(event.target.value))}
       >

       </input>
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
       <input 
       placeholder="Categoria"
       value={category}
       onChange={event=>setCategory(event.target.value)}
       />
       <button type="submit">Cadastrar</button>

       </Container>
   </Modal>
  
 
    )
    
}