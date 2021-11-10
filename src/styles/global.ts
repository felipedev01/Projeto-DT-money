import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --background:gold;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{

    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
`