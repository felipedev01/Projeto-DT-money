import styled from 'styled-components'

export const Container=styled.div`



display:grid;
grid-template-columns:repeat(3,1fr);
gap:2rem;


div{
   
   background: var(--shape);
   margin-top:-2rem;
   border-radius:0.25rem;
   padding:1rem;
   padding-bottom:2rem;
   padding-left:2rem;

   
};


header{

    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:1rem;
    padding-bottom:1rem;
    
    
   
};

.Total{
    background:var(--green);
    color:var(--shape)



}strong{

    font-size:2rem;
    line-height:3rem;
    font-weight:500;
}







`
