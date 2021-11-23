import {useState}from 'react'
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {NewTransactionModal} from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import {TransactionContext} from './TransactionsContext'

 Modal.setAppElement('#root');

export function App() {

  const[isOpenModalTransaction,setisOpenModalTransaction]=useState(false)

  function handleOpenModal(){

    setisOpenModalTransaction(true)
}
function handleCloseModal(){

  setisOpenModalTransaction(false)
}
  return (
    <TransactionContext.Provider value={[]}>

     <Header  onOpenNewTransactionModal={handleOpenModal}></Header>

    <Dashboard></Dashboard>
    
    <GlobalStyle ></GlobalStyle>
    
   <NewTransactionModal isOpen={isOpenModalTransaction}
   onRequestClose={handleCloseModal}
   ></NewTransactionModal>
     
    </TransactionContext.Provider>
  );
}

export default App;
