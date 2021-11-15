import Modal from 'react-modal';

interface NewTrasactionModalProps {

  isOpen:boolean;
  onRequestClose:()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
    return(

        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
   
    >

  <p>Transaçôes</p>
   </Modal>
    )
}