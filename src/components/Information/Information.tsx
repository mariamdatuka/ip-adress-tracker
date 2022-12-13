import React from 'react'
import { GridContainer, GridItem} from './Information.styles'
import { Data } from '../../Interfaces/interfaces';



export interface Props{
  data:Data;
}

const Information= ({data}:Props) => {

  const infoBox= [
    {
        title:"IP ADRESS",
        info: data.ip,
    },

    {
        title:"LOCATION",
        info: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
    },

    {
        title:"TIMEZONE",
        info: `UTC ${data.location.timezone}`,
    },

    {
        title:"ISP",
        info: data.isp,
    }
]



  return (
    <>
      <GridContainer>
     {infoBox.map((item, index)=>(
      <GridItem key={index}>
         <h4>{item.title}</h4>
         <p>{item.info}</p>
      </GridItem>
      ))}
      </GridContainer>
     
    </>
  )
}

export default Information