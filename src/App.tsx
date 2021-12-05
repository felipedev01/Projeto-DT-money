import {useState}from 'react'
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {NewTransactionModal} from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useTransactions, TransactionsProvider } from './hooks/useTransactions'


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
    <TransactionsProvider>

     <Header  onOpenNewTransactionModal={handleOpenModal}></Header>

    <Dashboard></Dashboard>
    
    <GlobalStyle ></GlobalStyle>
    
   <NewTransactionModal isOpen={isOpenModalTransaction}
   onRequestClose={handleCloseModal}
   ></NewTransactionModal>
     
    </TransactionsProvider>
  );
}

export default App;
