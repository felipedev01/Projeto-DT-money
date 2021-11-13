import styled from 'styled-components'

export const Container=styled.header`


background:var(--blue)



`

export const Contant = styled.div`

max-width:1120px;
margin:0 auto;
display:flex;
align-items:center;
justify-content:space-between;
padding:1rem 1rem 10rem;

button{
    color:white;
    padding:0 2rem;
    font-size:1rem;
    border-radius:0.25rem;
    background:var(--blue-light);
    border:0;
    padding-top:0.75rem;
    padding-bottom:0.75rem;

&:hover{
    filter:brightness(0.7)

}
transition:0.2s;
}
`