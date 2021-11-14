import styled from 'styled-components'

export const Container=styled.div`




margin-top:1rem;
width:100%;
table{
    width:100%;
    border-spacing:0 0.5rem;
}
thead{
    padding-left:2rem;
}
th{
    color:var(--text-body);
    text-align:left;
    padding-left:2rem;
    
   
    
}
td{
   padding:1rem;
   font-size:1rem;
   line-height:1.5rem;
   font-weight:400;
   color:var(--text-body);
   padding-left:2rem;
   padding-bottom: 1.25rem;
   padding-top:1.25rem;
   border-radius:0.4rem;

    :first-child{
       color:var(--text-title);
   
   }
   &.deposit{
       color:var(--green);

   }
   &.withDraw{
       color:var(--red);
   }
   
}

tbody{
    background-color:red;
    background:var(--shape);
    

    tr{
        

    }
}






`