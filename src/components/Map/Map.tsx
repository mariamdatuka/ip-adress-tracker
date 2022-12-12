import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import MarkerPosition from '../../MarkerPosition';
import '../../App.css';
import { Data } from '../../Interfaces/interfaces';

export interface Props{
  data: Data;

}

const Map = ({data}:Props) => {


  return (
    <>
<MapContainer 
       center={[data.location.lat, data.location.lng]} 
       zoom={13} 
       scrollWheelZoom={true}
       style={{height:'100vh', width:'100vw'}}>
    <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
   <MarkerPosition data={data}/>
</MapContainer>
    </>
  )
}

export default Map