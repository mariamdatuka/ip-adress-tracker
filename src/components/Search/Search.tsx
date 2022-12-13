import { SearchInput, SearchButton, Title, Background, Form } from './Search.styles'
import { useState, useEffect } from 'react'
import axios from 'axios';
import arrow from '../../images/icon-arrow.svg';

import Information from '../Information/Information';
import { Data } from '../../Interfaces/interfaces';
import Map from '../Map/Map';


const Search = () => {

const [data, setData]=useState<Data | null>(null);
const [ipAdress, setipAdress]=useState<string>('');



useEffect(()=>{
    axios(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&ipAdress`)
    .then(response => 
    setData(response.data))
}, [])

const getAdress=()=>{
  axios(`https://geo.ipify.org/api/v2/country,city?apiKey=at_JVHXqoZk9DYNE0g1hjT6DgHvEh9DS&ipAddress=${ipAdress}`)
  .then(response => 
  setData(response.data))
}

const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault();
  getAdress();
  setipAdress('');
}



  return (
    <> 
    <Background>
    <Form onSubmit={handleSubmit}>
       <Title>IP Adress Tracker</Title>
         <SearchInput 
          type='text' 
          placeholder='IP ADRESS'
          value={ipAdress}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setipAdress(e.target.value)}/>
        <SearchButton type='submit'><img src={arrow} alt='arrow'/></SearchButton>
    </Form>
    </Background>
    
      {data ? <Information data={data}/> : null}
      {data ? <Map data={data}/> : null}
    </>
  )
}

export default Search;


