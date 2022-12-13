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
top:24%;

@media (max-width:360px){
  left:-2%;
  top:23%;
}

@media (min-width:390px){
  left:2%;
  top:18%;
}

@media (min-width:410px){
  left:4%;
  top:18%;
}

@media (min-width: 1280px) {
   grid-template-columns:1fr 1fr 1fr 1fr;
   width:1000px;
   height:200px;
   column-gap:80px;
   left:10%;
   top:27%;

   @media (min-width: 1440px){
     left:15%;
     top:28%;
   }

   @media (min-width: 1920px){
     left:20%;
     top:28%;
   }
  
  }
`

export const GridItem=styled.div`
 position:relative;
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



 @media (min-width: 1280px) {
   gap:10px;

   h4{
      font-size:12px;
   }

   p{
      font-size:22px;
   }

   &:not(:last-child):after{
   content: "";
   position: absolute;
   height: 50px;
   width: 2px;
   background: gray;
   right: -40%;
 }
}
`

