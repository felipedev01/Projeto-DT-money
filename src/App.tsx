import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title=styled.h1`
  



`
export function App() {
  return (
    <>

     <Header></Header>

    <Dashboard></Dashboard>
    
    <GlobalStyle ></GlobalStyle>
          
     
    </>
  );
}

export default App;
