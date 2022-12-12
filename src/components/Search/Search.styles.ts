import styled from 'styled-components';


export const Background=styled.div`
 position:absolute;
 z-index:555;
 
 img{
    height:270px;
 }
`

export const Form=styled.form`
 position:relative;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:30px;
 padding-top:30px;
 z-index:666;

`

export const Title=styled.h1`
  color:#fff;
  text-align:center;
  font-size:28px;

  @media (min-width:1440px){
  font-size:32px;
 }

`

export const SearchInput=styled.input`
 width:330px;
 height:55px;
 padding-left:10px;
 padding-right:70px;
 border:none;
 border-radius:12px;
 font-size:18px;
 font-family:'Rubik', sans-serif;

 @media (min-width:1440px){
  width:550px;
 }

`
export const SearchButton=styled.button`
    position:absolute;
    background-color: #000000;
    width:60px;
    height:55px;
    border:none;
    border-top-right-radius:12px;
    border-bottom-right-radius:12px;
    right:6%;
    bottom:0;
    cursor:pointer;

    @media (min-width:1440px){
     right:30.9%;
 }

`
