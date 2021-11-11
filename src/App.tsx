
import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title=styled.h1`
  
font-family:'Mochiy Pop One'


`
export function App() {
  return (
    <div className="App">

    <Title>
    Hello World
    </Title>
    
    <GlobalStyle ></GlobalStyle>
          
     
    </div>
  );
}

export default App;
