
import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title=styled.h1`
  
color:black;
font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-weight:bolder;
font-style:italic;
font-size:100px;

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
