import Modal from 'react-modal';
import { Container, TrasactionTypeContainer } from './style';
import fecharModal from '../../Assets/Vector.svg'
import entrada from '../../Assets/Entradas.svg'
import saida from '../../Assets/Saídas.svg'

interface NewTrasactionModalProps {

  isOpen:boolean;
  onRequestClose:()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
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
         <button type="button"><img src={entrada} alt="Entrada" /><span>Entrada</span></button>
         <button type="button"><img src={saida} alt="Saída" /><span>Saída</span></button>
       </TrasactionTypeContainer>
       <input placeholder="Categoria"/>
       <button type="submit">Cadastrar</button>

       </Container>
   </Modal>
 
    )
}