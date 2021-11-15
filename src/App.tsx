import {useState}from 'react'
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';


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
    <>

     <Header  onOpenNewTransactionModal={handleOpenModal}></Header>

    <Dashboard></Dashboard>
    
    <GlobalStyle ></GlobalStyle>
    <Modal isOpen={isOpenModalTransaction} onRequestClose={handleCloseModal}
   
    >

  <p>Transaçôes</p>
   </Modal>
     
    </>
  );
}

export default App;
