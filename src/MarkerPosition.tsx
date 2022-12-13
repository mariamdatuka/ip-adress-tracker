import { useEffect, useMemo } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from './components/icon'
import { Data } from './Interfaces/interfaces'

export interface Props{
    data:Data;
}

const MarkerPosition = ({data}:Props) => {
    const map=useMap();
 
    const position:any=useMemo(()=>{
      return [data.location.lat, data.location.lng];
    }, [data.location.lat, data.location.lng])
    

    useEffect(()=>{
        map.flyTo(position,13, {
            animate:true,
        })
    }, [map, position])

  return (
    <Marker icon={icon} position={[data.location.lat, data.location.lng]}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
   </Marker>
  )
}

export default MarkerPosition