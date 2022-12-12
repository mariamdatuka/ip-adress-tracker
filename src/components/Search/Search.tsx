import { SearchInput, SearchButton, Title, Background, Form } from './Search.styles'
import { useState, useEffect } from 'react'
import axios from 'axios';
import arrow from '../../images/icon-arrow.svg';
import background from '../../images/pattern-bg.png';
import Information from '../Information/Information';
import { Data } from '../../Interfaces/interfaces';
import Map from '../Map/Map';


const Search = () => {

const [data, setData]=useState<Data | null>(null);
const [ipAdress, setipAdress]=useState<string>('');

/*const checkIpAddress =/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
*/

/*useEffect(()=>{
    axios(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&ipAdress`)
    .then(response => 
    setData(response.data))
}, [])

const getAdress=()=>{
  axios(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&ipAdress=${ipAdress}`)
  .then(response => 
  setData(response.data))
}



const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault();
  getAdress();
  setipAdress('');
}

*/

  return (
    <> 
    <Background>
    <img src={background} alt='bg'/>
    </Background>
    <Form>
    <Title>IP Adress Tracker</Title>
    <SearchInput 
       type='text' 
       placeholder='IP ADRESS'
       value={ipAdress}
       onChange={(e)=>setipAdress(e.target.value)}/>
    <SearchButton type='submit'><img src={arrow} alt='arrow'/></SearchButton>
    </Form>
    {data ? <Information data={data}/> : null}
    {data ? <Map data={data}/> : null}
    
    </>
  )
}

export default Search;


