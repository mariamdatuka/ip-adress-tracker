import styled from 'styled-components';

export const GridContainer=styled.div`
position:absolute;
display:grid;
width:335px;
grid-template-columns:1fr;
row-gap:20px;
place-items: center;
background-color:#fff;
margin-left:20px;
margin-right:20px;
margin-top:20px;
border-radius:12px;
padding:20px;
z-index:999;

@media (max-width: 1200px) {
   grid-template-columns:1fr 1fr 1fr 1fr;
   width:600px;
  }
`

export const GridItem=styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:5px;

 
 h4{
    font-size:10px;
    color: hsl(0, 0%, 59%);
    letter-spacing:1.5px;
 }

 p{
    font-size:20px;
    color: #2C2C2C;
    font-weight:bold;
 }

`